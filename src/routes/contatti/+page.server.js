import nodemailer from 'nodemailer';
import { GMAIL_USER, GMAIL_APP_PASSWORD } from '$env/static/private';

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: GMAIL_USER,
		pass: GMAIL_APP_PASSWORD
	}
});

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		// Honeypot check: se il campo nascosto 'website' è compilato, è un bot.
		if (data.get('website')) {
			return { success: true }; // Fallimento silenzioso (inganna il bot)
		}

		const name = data.get('name');
		const email = data.get('email');
		const message = data.get('message');

		try {
			await transporter.sendMail({
				from: `"Sito Web" <${GMAIL_USER}>`,
				to: GMAIL_USER,
				replyTo: email,
				subject: `Nuovo messaggio da ${name}`,
				text: `Hai ricevuto un nuovo messaggio dal modulo contatti:\n\nNome: ${name}\nEmail: ${email}\n\nMessaggio:\n${message}`,
				html: `<p>Hai ricevuto un nuovo messaggio dal modulo contatti:</p><ul><li><strong>Nome:</strong> ${name}</li><li><strong>Email:</strong> ${email}</li></ul><p><strong>Messaggio:</strong><br>${message}</p>`
			});

			return { success: true };
		} catch (error) {
			console.error('Errore invio email:', error);
			return { success: false, error: true, message: error.message };
		}
	}
};
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

		// Honeypot check
		if (data.get('website')) {
			return { success: true };
		}

		const name = data.get('name');
		const email = data.get('email');
		const phone = data.get('phone');
		const availability = data.get('availability');
		const message = data.get('message');

		try {
			await transporter.sendMail({
				from: `"Candidatura Volontario" <${GMAIL_USER}>`,
				to: GMAIL_USER,
				replyTo: email,
				subject: `Nuova candidatura volontario: ${name}`,
				text: `Dettagli candidatura:\n\nNome: ${name}\nEmail: ${email}\nTelefono: ${phone}\nDisponibilità: ${availability}\n\nMessaggio:\n${message}`
			});
			return { success: true };
		} catch (error) {
			console.error(error);
			return { success: false, error: true };
		}
	}
};
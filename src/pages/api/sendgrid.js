import sendgrid from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
	console.log(process.env.SENDGRID_API_KEY);
	sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
}

async function sendEmail(req, res) {
	try {
		await sendgrid.send({
			to: 'sarahyaepark@gmail.com', // Your email where you'll receive emails
			from: `${req.body.email}`, // your website email address here
			subject: `${req.body.subject}`,
			html: `<div>${req.body.content}</div>`,
		});
	} catch (error) {
		return res.status(error.statusCode || 500).json({ error: error.message });
	}

	return res.status(200).json({ error: '' });
}

export default sendEmail;

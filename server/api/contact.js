// server/api/contact.js
import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
    // Get form data from the request body
    const body = await readBody(event);

    const { name, email, phone, subject, message } = body;

    // Create a Nodemailer transporter using Gmail's SMTP
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL,
            pass: process.env.SECRET,
        },
    });

    // Define email options
    const mailOptions = {
        from: 'binnurtikweb@gmail.com',
        to: 'mdyusufbinnur@gmail.com', // Email address to send the message to
        subject: `New Contact Form Portfolio: ${subject}`,
        text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
    };

    // Send the email
    try {
        await transporter.sendMail(mailOptions);
        return { status: 'success', message: 'Email sent successfully!' };
    } catch (error) {
        return { status: 'error', message: 'Failed to send email: ' + error.message };
    }
});

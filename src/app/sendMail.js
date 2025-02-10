"use server"
import { EmailTransporter } from "./layout";

export const SendEmail = async (email, username, userMessage, num) => {
    try {
        const thankYouMailOptions = { 
            from: process.env.EMAIL_NAME, 
            to: `${email}, personal.vijayji1137@gmail.com`, 
            subject: 'Thank You for Reaching Out to WebCraft!', 
            html: `<p>Hello ${username}  || ${num},</p>
                   <p>Thank you for getting in touch with us. We have received your message:</p>
                   <blockquote>${userMessage}</blockquote>
                   <p>We will contact you within 12 hours.</p>
                   <p>Best regards,<br>WebCraft Team</p>`
        };
        await EmailTransporter.sendMail(thankYouMailOptions);
        return true
    } catch (error) {
        return false
    }
};

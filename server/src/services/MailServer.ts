import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

type  EmailConfig = {
    destinationUser: string;
    subjectText: string;
    htmlOption: string; //corpo do email
};

const MailServer = async ({
    destinationUser, 
    subjectText, 
    htmlOption}: EmailConfig) => {

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL, //pega a informacao presente em .env
                pass: process.env.PASSWORD
            }

        });

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: destinationUser, 
            subject: subjectText,
            html: htmlOption

        });
        
}

export{
    MailServer  
} 
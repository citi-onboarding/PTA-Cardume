import { MailServer } from "src/services/MailServer";
import dotenv from "dotenv";
import { Request, Response } from "express";

dotenv.config();

const SendMail = async(request: Request, response: Response) => {
    try{
        const {name, email, message} = request.body;
        await MailServer({
            destinationUser: process.env.EMAIL_WILL_RECEIVE, 
            subjectText: 'nodemailer funcionando',
            htmlOption: `<p>
                Um usuário entrou em contato! Esse usuário em nome ${name} e apresenta o email ${email}. 
                Esse usuário deixou a mensagem: ${message}
            <p/>`
        })

        return response.status(200).send({
            answer: "Enviado."
        })
    
    }catch(error){
        
        return response.status(500).send({
        answer: "Desculpe.Houver algum tipo de problema."
    })

    }
}

export{
    SendMail
}
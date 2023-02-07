const nodemailer = require("nodemailer");

const {
    PASSNODEMAILER, MAIL
} = process.env;

const enviarMail = async (mail, token) => {
    const config = {
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: MAIL,
            pass: PASSNODEMAILER,
        },
        tls: {
            rejectUnauthorized: false
        }
    }


    const mensaje = {
        from: MAIL,
        to: mail,
        subject: "correo de prueba",
        html: "Hola estoy probando" + token
    }

    const transport = nodemailer.createTransport(config);
    const info = await transport.sendMail(mensaje)
    console.log(info)
    console.log("mail enviado")
}

module.exports = { enviarMail };

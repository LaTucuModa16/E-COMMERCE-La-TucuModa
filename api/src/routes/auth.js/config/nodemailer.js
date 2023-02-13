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
        subject: "Welcome to your community",
        html: "<h2>Thank you for registering 👖</h2> <img src=`https://mundotextilmag.com.ar/wp-content/uploads/came-620x330.jpg` /> <h3>We welcome you to our ecommerce laTucuModa. We are pioneers in style, we will be sending exclusive clothing promotions for subscribers like you.</h3>" + token
    }

    const transport = nodemailer.createTransport(config);
    const info = await transport.sendMail(mensaje)
    console.log(info)
    console.log("mail enviado")
}

module.exports = { enviarMail };

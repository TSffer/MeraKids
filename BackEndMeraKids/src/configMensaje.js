const nodemailer = require("nodemailer");

module.exports = (formulario) => {
    console.log(formulario.nombre);
    var transporter = nodemailer.createTransport({
        host: 'smtp.mail.yahoo.com',
        port: 465,
        service: "yahoo",
        secure: false,
        auth: {
            user: "xxx@yahoo.com",
            pass: "xxxxxxxxxxx",
        },
        debug: false,
        logger: true
    });

    const mailOptions = {
        from: "merakidsweb@yahoo.com",
        to: 'merakidswebs@gmail.com', // Cambia esta parte por el destinatario
        subject: formulario.asunto,
        html: `
        <strong>Nombre:</strong> ${formulario.nombre} <br/>
        <strong>E-mail:</strong> ${formulario.email}  <br/>
        <strong>Mensaje:</strong> ${formulario.mensaje}
        `
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err);
        else
            console.log(info);
    });
} 

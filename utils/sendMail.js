var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    pool: true,
    host: 'mail.webmarie.com',
    port: 465,
    secure: true,
    auth: {
        user: 'postapp@webmarie.com',
        pass: 'postappwebmarie'
    }
});


module.exports = async function (to, subject, html) { 
    var mailOptions = {
        from: 'noreply@raffle.allstars-it.com',
        to: to,
        subject: subject,
        html: html
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return {error: true};
        } else {
            return info;
        }
    });
};
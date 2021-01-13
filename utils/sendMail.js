var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    pool: true,
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
        user: process.env.MAIL_USER,
        pass:  process.env.MAIL_PASS
    }
});


module.exports = async function (to, subject, html) { 
    var mailOptions = {
        from: process.env.MAIL_FROM_ADDRESS,
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
/**
 * This file will contain the sample code for sending the email notification
 */
const nodemailer = require('nodemailer');


module.exports = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: 'roopeshb2019@gmail.com',
        pass: process.env.GMAIL_PASSWORD,
    },
    secure: true,
});


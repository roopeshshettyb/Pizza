/**
 * This file will contain the sample code for sending the email notification
 */
const nodemailer = require('nodemailer');
const emailConfig = require('../configs/email.config')

module.exports = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: emailConfig.GMAIL_ID,
        pass: emailConfig.GMAIL_PASSWORD,
    },
    secure: true,
});


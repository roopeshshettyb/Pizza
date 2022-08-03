const cron = require('node-cron')
const Notification = require('../models/notification.model')
const emailTransporter = require("../notifiers/emailService");

cron.schedule("*/30 * * * * *", async () => {
    const notifications = await Notification.find({ status: "UN_SENT" })

    if (notifications) {
        console.log("Unsent are", notifications.length)

        notifications.forEach(n => {
            const mailObj = {
                to: n.recepientEmails,
                subject: n.subject,
                text: n.content
            }
            emailTransporter.sendMail(mailObj, async (err, info) => {
                if (err) { console.log("Error", err.message) }
                else { console.log("Sent", info) }
                n.status = "SENT"
                await n.save()
            })
        })

    }
})


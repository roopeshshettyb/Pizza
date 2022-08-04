const Notification = require('../models/notification.model')

const isValidEmail = (email) => {
    return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}

exports.validateAcceptNotificationRequestBody = async (req, res, next) => {
    if (!req.body.subject) return res.status(400).send({ message: "Subject is not provided" })
    if (!req.body.recepientEmails) return res.status(400).send({ message: "Recepient Emails are not provided" })
    if (!req.body.content) return res.status(400).send({ message: "Content is not provided" })
    if (!req.body.requester) return res.status(400).send({ message: "Requester is not provided" })

    const emails = req.body.recepientEmails.split(',')
    for (let i = 0; i < emails.length; i++) {
        if (!isValidEmail(emails[i])) return res.status(400).send({ message: "Email is not valid", invalidEmail: emails[i] })
    }
    next()
}

exports.validateGetNotificationDetails = async (req, res, next) => {
    if (!req.params.id) return res.status(400).send({ message: "ID is not provided" })
    try {
        const notif = await Notification.findOne({ "_id": trackingId })
        if (!notif) return res.status(400).send({ message: "Notification does not exist." })
        next()
    } catch (err) { console.log("Error in validateGetNotificationDetails", err.message); return res.status(500).send({ message: "Internal server error" }) }
}
const Notification = require('../models/notification.model')

exports.acceptNotificationRequest = async (req, res) => {

    const { subject, recepientEmails, content, requester, status } = req.body
    try {
        const notif = await Notification.create({ subject, recepientEmails, content, requester, status })
        return res.status(201).send({ message: "Request Accepted", trackingId: notif._id })
    } catch (err) { console.log("Error in acceptNotificationRequest", err.message); return res.status(500).send({ message: "Internal server error" }) }
}

exports.getNotificationDetails = async (req, res) => {
    try {
        const trackingId = req.params.id
        const notif = await Notification.findOne({ "_id": trackingId })
        res.status(200).send(notif)
    } catch (err) { console.log("Error in getNotificationDetails", err.message); return res.status(500).send({ message: "Internal server error" }) }
}
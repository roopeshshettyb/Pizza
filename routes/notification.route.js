
const notificationController = require('../controllers/notification.controller')

module.exports = (app) => {
    app.post('/notiserv/api/v1/notifications', notificationController.acceptNotificationRequest)
    app.get('/notiserv/api/v1/notifications/:id', notificationController.getNotificationDetails)
}
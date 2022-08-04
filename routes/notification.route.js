
const notificationController = require('../controllers/notification.controller')
const { validateAcceptNotificationRequestBody, validateGetNotificationDetails } = require('../middlewares/notification.middleware')

module.exports = (app) => {
    app.post('/notiserv/api/v1/notifications', validateAcceptNotificationRequestBody, notificationController.acceptNotificationRequest)
    app.get('/notiserv/api/v1/notifications/:id', validateGetNotificationDetails, notificationController.getNotificationDetails)
}
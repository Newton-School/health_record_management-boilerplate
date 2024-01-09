const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

// Define routes for appointments
router.get('/appointments', appointmentController.getAllAppointments);
router.get('/appointments/:id', appointmentController.getAppointmentById);
router.post('/appointments', appointmentController.createAppointment);

module.exports = router;

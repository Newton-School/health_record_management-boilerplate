//Refer to the project before writing a code

const Appointment = require('../models/Appointment');
const HealthRecord = require('../models/HealthRecord');
const HealthCheckReminder = require('../models/HealthCheckReminder');

exports.createAppointment = async (req, res) => {
  try {
    // TODO: Extract necessary details from the request body (studentId, date, reason)
    // TODO: Validate request data
    // TODO: Check if the health record of a student exists
    // TODO: Create a new appointment and save it to the database
    // TODO: Send a success response with the created appointment

    res.status(201).json({
      message: 'Appointment created successfully',
      appointment: newAppointment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.status(200).json(appointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const mongoose = require('mongoose');
const HealthCheckReminder = require('../models/HealthCheckReminder');

const appointmentSchema = new mongoose.Schema({
  // Fields:
  // studentId:
  // Type: ObjectId (Reference to Student model)
  // Required: true
  // date:
  // Type: Date
  // Required: true
  // reason:
  // Type: String (Enum: ['Health Check','Other Reason'])
  // Required: true
});

appointmentSchema.pre('save', async function (next) {
  try {
    // TODO: Extract necessary details from the appointment (studentId, date, reason)
    // TODO: Check if the appointment is for a health check
    // TODO: If it's a health check, create a new HealthCheckReminder and save it
    // TODO: Call the 'next' function to continue with the save operation
  } catch (error) {
    console.error('Error triggering health check reminder:', error);
    next(error);
  }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;

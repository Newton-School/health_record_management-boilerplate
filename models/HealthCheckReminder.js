const mongoose = require('mongoose');

const healthCheckReminderSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  appointmentDate: {
    type: Date,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const HealthCheckReminder = mongoose.model(
  'HealthCheckReminder',
  healthCheckReminderSchema
);

module.exports = HealthCheckReminder;

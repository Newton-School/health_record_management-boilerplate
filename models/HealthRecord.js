const mongoose = require('mongoose');

const healthRecordSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  vaccinationHistory: {
    type: String,
  },
  medicalExaminations: {
    type: String,
  },
});

const HealthRecord = mongoose.model('HealthRecord', healthRecordSchema);

module.exports = HealthRecord;

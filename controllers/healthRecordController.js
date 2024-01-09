const HealthRecord = require('../models/HealthRecord');

exports.createHealthRecord = async (req, res) => {
  try {
    const { studentId, vaccinationHistory, medicalExaminations } = req.body;
    const newHealthRecord = new HealthRecord({
      studentId,
      vaccinationHistory,
      medicalExaminations,
    });
    await newHealthRecord.save();
    res.status(201).json({
      message: 'Health record created successfully',
      healthRecord: newHealthRecord,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getAllHealthRecords = async (req, res) => {
  try {
    const healthRecords = await HealthRecord.find();
    res.status(200).json(healthRecords);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getHealthRecordById = async (req, res) => {
  try {
    const healthRecord = await HealthRecord.findById(req.params.id);
    if (!healthRecord) {
      return res.status(404).json({ message: 'Health record not found' });
    }
    res.status(200).json(healthRecord);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

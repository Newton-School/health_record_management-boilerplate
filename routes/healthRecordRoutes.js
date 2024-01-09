const express = require('express');
const router = express.Router();
const healthRecordController = require('../controllers/healthRecordController');

router.post('/', healthRecordController.createHealthRecord);
router.get('/', healthRecordController.getAllHealthRecords);
router.get('/:id', healthRecordController.getHealthRecordById);

module.exports = router;

const router = require('express').Router();

router.use('/student', require('./studentRoutes'));
router.use('/health', require('./healthRecordRoutes'));
router.use('/appointment', require('./appointmentRoutes'));

module.exports = router;

const express = require('express');
const mentorController = require('../controllers/mentorController');

const router = express.Router();

router.post('/', mentorController.createMentor);
router.get('/:mentorId/students', mentorController.getMentorStudents);

module.exports = router;

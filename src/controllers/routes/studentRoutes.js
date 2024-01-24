const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

router.post('/', studentController.createStudent);
router.post('/:studentId/assign-mentor/:mentorId', studentController.assignMentor);
router.get('/:mentorId/students', studentController.getMentorStudents);
router.get('/:studentId/assigned-mentor', studentController.getAssignedMentor);

module.exports = router;

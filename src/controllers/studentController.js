const Student = require('../models/Student');
const Mentor = require('../models/Mentor');

exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({ student });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.assignMentor = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const mentorId = req.params.mentorId;

    const student = await Student.findByIdAndUpdate(studentId, { mentor: mentorId }, { new: true });
    const mentor = await Mentor.findByIdAndUpdate(mentorId, { $addToSet: { students: studentId } }, { new: true });

    res.status(200).json({ student, mentor });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMentorStudents = async (req, res) => {
  try {
    const mentorId = req.params.mentorId;
    const mentor = await Mentor.findById(mentorId).populate('students');
    res.status(200).json({ students: mentor.students });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAssignedMentor = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const student = await Student.findById(studentId).populate('mentor');
    res.status(200).json({ mentor: student.mentor });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

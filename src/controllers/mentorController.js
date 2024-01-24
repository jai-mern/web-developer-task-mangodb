const Mentor = require('../models/Mentor');

exports.createMentor = async (req, res) => {
  try {
    const mentor = await Mentor.create(req.body);
    res.status(201).json({ mentor });
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

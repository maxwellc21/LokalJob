const { v4: uuidv4 } = require('uuid');
const Application = require('../models/Application');

// Submit Application
exports.submitApplication = async (req, res) => {
  const { userId, jobId, resumeFile, coverLetter } = req.body;
  try {
    const newApp = new Application({ id: uuidv4(), userId, jobId, resumeFile, coverLetter });
    await newApp.save();
    res.status(201).json(newApp);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get Application by ID
exports.getApplicationById = async (req, res) => {
  try {
    const app = await Application.findOne({ id: req.params.id });
    if (!app) return res.status(404).json({ message: 'Application not found' });
    res.json(app);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// List Applications by User
exports.getApplicationsByUser = async (req, res) => {
  try {
    const apps = await Application.find({ userId: req.params.userId });
    res.json(apps);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// List Applications by Job
exports.getApplicationsByJob = async (req, res) => {
  try {
    const apps = await Application.find({ jobId: req.params.jobId });
    res.json(apps);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete Application
exports.deleteApplication = async (req, res) => {
  try {
    const deleted = await Application.findOneAndDelete({ id: req.params.id });
    if (!deleted) return res.status(404).json({ message: 'Application not found' });
    res.json({ message: 'Application withdrawn successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

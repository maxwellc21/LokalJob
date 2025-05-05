const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  id: { type: String, required: true },   // UUID
  userId: { type: String, required: true },
  jobId: { type: String, required: true },
  resumeFile: { type: String },   // Simulate file upload (store filename)
  coverLetter: { type: String },
  appliedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', ApplicationSchema);

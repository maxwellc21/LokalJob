const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  id: { type: String, required: true },   // UUID
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String },
  location: { type: String },
  postedBy: { type: String, required: true },  // userId of poster
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', JobSchema);

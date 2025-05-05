const { v4: uuidv4 } = require('uuid');
const Job = require('../models/Job');

// Create Job
exports.createJob = async (req, res) => {
  const { title, description, category, location, postedBy } = req.body;
  try {
    const newJob = new Job({ id: uuidv4(), title, description, category, location, postedBy });
    await newJob.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get Job by ID
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findOne({ id: req.params.id });
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.json(job);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update Job
exports.updateJob = async (req, res) => {
  try {
    const updated = await Job.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Job not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete Job
exports.deleteJob = async (req, res) => {
  try {
    const deleted = await Job.findOneAndDelete({ id: req.params.id });
    if (!deleted) return res.status(404).json({ message: 'Job not found' });
    res.json({ message: 'Job deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// List/Search Jobs
exports.getAllJobs = async (req, res) => {
  const { search } = req.query;
  try {
    let query = {};
    if (search) {
      query = { 
        $or: [
          { title: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
          { category: { $regex: search, $options: 'i' } },
          { location: { $regex: search, $options: 'i' } }
        ]
      };
    }
    const jobs = await Job.find(query);
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

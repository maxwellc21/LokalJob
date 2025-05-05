const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI, PORT } = require('./config');
const jobRoutes = require('./routes/jobRoutes');

const app = express();
app.use(express.json());
app.use('/api/jobs', jobRoutes);

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected for Job Service');
    app.listen(PORT, () => console.log(`🚀 Job Service running on port ${PORT}`));
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));

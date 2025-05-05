const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI, PORT } = require('./config');
const applicationRoutes = require('./routes/applicationRoutes');

const app = express();
app.use(express.json());
app.use('/api/applications', applicationRoutes);

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected for Application Service');
    app.listen(PORT, () => console.log(`🚀 Application Service running on port ${PORT}`));
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));

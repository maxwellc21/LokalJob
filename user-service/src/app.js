const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI, PORT } = require('./config');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected for User Service');
    app.listen(PORT, () => console.log(`🚀 User Service running on port ${PORT}`));
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));

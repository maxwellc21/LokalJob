const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI, PORT } = require('./config');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Auth Service running on port ${PORT}`));
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));

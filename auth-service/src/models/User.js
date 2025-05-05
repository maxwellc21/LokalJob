const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: { type: String, required: true },  // UUID
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['worker', 'client'], required: true }
});

module.exports = mongoose.model('User', UserSchema);

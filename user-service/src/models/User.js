const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: { type: String, required: true },   // UUID
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['worker', 'client'], required: true },
  phone: { type: String },
  address: { type: String }
});

module.exports = mongoose.model('User', UserSchema);

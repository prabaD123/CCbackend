const mongoose = require('mongoose');

const handlerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
  },
  experience: {
    type: String,
    required: true,
  },
  availability: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  bio: {
    type: String,
  },

  password: {
    type: String,
    required: true
},

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const DogHandler = mongoose.model('DogHandler', handlerSchema);

module.exports = DogHandler;
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DogEnthusiast',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const enthusiastSchema = new mongoose.Schema({
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

  password: {
    type: String,
    required: true
 },
  articles: [articleSchema],
  location: {
    type: String,
  },
  bio: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const DogEnthusiast = mongoose.model('DogEnthusiast', enthusiastSchema);

module.exports = DogEnthusiast;
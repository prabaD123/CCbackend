const mongoose = require('mongoose');

const dogOwnerSchema = new mongoose.Schema({
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

  dogs: [
    {
      name: {
        type: String,
        required: true,
      },
      breed: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
      },
      description: {
        type: String,
      },
    },
  ],
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

const DogOwner = mongoose.model('DogOwner', dogOwnerSchema);

module.exports = DogOwner
const express = require('express');
const router = express.Router();
const User = require('./userModel');

// Signup
router.post('/signup', (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({ username, password });
  newUser.save((err) => {
    if (err) {
      res.status(500).send('Error registering new user.');
    } else {
      res.status(200).send('User registered successfully.');
    }
  });
});

// Login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username, password }, (err, user) => {
    if (err) {
      res.status(500).send('Error while logging in.');
    } else if (!user) {
      res.status(401).send('Invalid username or password.');
    } else {
      res.status(200).send('Login successful.');
    }
  });
});

module.exports = router;

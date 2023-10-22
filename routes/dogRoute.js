const express = require('express');

const dogController = require('../controllers/dogController');
const router = express.Router();

router.route('/user/login').post(userController.login)
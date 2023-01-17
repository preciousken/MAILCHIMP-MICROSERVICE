const express = require('express');
const { Signup } = require('../controller/signup');
const router = express.Router();

router.post('/mailchimp/signup',Signup)

module.exports = router
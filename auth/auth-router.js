const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Clients = require('../helpers/client-model.js')
const Instructors = require('../helpers/instructor-model.js')

const restricted = require('../middleware/restricted-middleware.js')


router.post('/register')
































module.exports = router;
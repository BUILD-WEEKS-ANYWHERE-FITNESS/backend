const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config()

//routes
const authRouter = require('../auth/auth-router.js')
const clientRouter = require('../clients/clients-router.js')
const instructorRouter = require('../instructors/instructors-router.js')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req,res) => {
    res.send('Hello! Clients!!!')
})

module.exports = server;
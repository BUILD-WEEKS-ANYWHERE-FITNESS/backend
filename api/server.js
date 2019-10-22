const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config()

//routes
const authRouter = require('../auth/auth-router.js')
const clientRouter = require('../routes/clients-router.js/index.js')
const instructorRouter = require('../routes/instructors-router.js/index.js')
const classesRouter = require('../routes/classes-router.js')
const passRouter = require('../routes/punchpass-router.js')
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter)
server.use('/api/clients', clientRouter)
server.use('/api/instructors', instructorRouter)
server.use('/api/classes', classesRouter)
server.use('/api/punchpasses', passRouter)

server.get('/', (req,res) => {
    res.send('Hello! Clients!!!')
})

module.exports = server;
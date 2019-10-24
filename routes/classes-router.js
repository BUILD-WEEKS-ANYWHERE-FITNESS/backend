const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Classes = require('../helpers/classes-model.js')
const Enrolled = require('../helpers/enrolled-model.js')


router.get('/', (req,res) => {
    Classes.getAll()
        .then(allClasses => {
            res.status(200).json(allClasses)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({error: `You are not allowed to see this content`});
        })
})


router.post('/', (req,res) => {
    postClass = req.body
    Classes.add(postClass)
        .then(newClass => {
            res.status(201).json(newClass)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({error: `Error adding a new class`});
        })
})

router.get('/enrollment', (req,res) => {
    Enrolled.clientsEnrolled()
    .then(c => {
        res.status(201).json(c)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({error: `Error getting clients for each class`});
    })
})

router.post('/newclass', (req,res) => {
    
})













module.exports = router;
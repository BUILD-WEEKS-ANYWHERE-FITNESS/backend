const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Classes = require('../helpers/classes-model.js')



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













module.exports = router;
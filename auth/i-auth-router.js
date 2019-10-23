const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const Clients = require('../helpers/client-model.js')
const Instructors = require('../helpers/instructor-model.js')

// const restricted = require('../middleware/restricted-middleware.js')

router.post('/register', (req,res) => {
    let user = req.body
    user.password = bcrypt.hashSync(user.password, 10)
    if(user && user.username && user.password) {
        Instructors.add(user)
            .then(user => {
                console.log('USER I', user)
                // const token = generateToken(user);
                // user.password = undefined;
                // user.token = token;
                res.status(201).json(user);
              })
            .catch(error => {
                console.log('in i-authrouter', error)
                res.status(500).json({message: "Error registering new instructor"})
            });
    }
    else {
        res.status(400).json({message: "Requires username and password"});
    }
})

router.post('/login', (req,res) => {
    let { username, password } = req.body
    if(username && password) {
        Instructors.findBy({ username })
            .then(user => {
                if(user && bcrypt.compareSync(password, user.password)){
                    const token = generateToken(user);
                    user.password = undefined;
                    user.token = token;
                    res.status(200).json(user);
                }
                else{
                    res.status(401).json({ message: 'Invalid Credentials' })
                }
            })
            .catch(error => {
                console.log(error)
                res.status(401).json({message: "error loggin in instructor"})
            })
    }
    else {
        res.status(400).json({message: "Requires username and password"});
    }
})



//generateToken
function generateToken(user){
    const payload = {
        username: user.username,
        subject:user.id
    };
    const options ={
        expiresIn: '1d'
    };
    return jwt.sign(payload, process.env.JWT_SECRET, options);
  }
  

module.exports = router;
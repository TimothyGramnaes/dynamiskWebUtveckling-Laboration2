const express = require("express");
const UserModel = require("../models/user.model");
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken')


// Register a user, if the email already exist it returns a error
router.post('/api/user/register', async (req, res) => {
  const { email, password } = req.body;
  const emailExist = await UserModel.exists({ email: email })

  if (!emailExist) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const Newuser = {
        email: email,
        password: hashedPassword
    }
    try {
        const user = await UserModel.create(Newuser)
        res.status(201).json('User has been registered')
    } catch (err) {
        res.status(400).json({ message: err })
    }    
  } else {  
    res.status(400).json("Email already exists");
  }
})

// Login
// Checkes the email and password if it is correct
// Uses an login function from UserModel to check the user info
router.post('/api/user/login', async (req, res) => {
  const { email, password } = req.body;
  const maxAge = 1 * 24 * 60 * 60

  const createToken = (id) => {
    return jwt.sign(id, 'magic secret')
  }  

  try {
    const user = await UserModel.login(email, password)
        
    const token = createToken(email)
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
      
    res.status(200).json('User is logged in')
        
  } catch (error) {
    res.status(400).json(error)
  }
})

// Checkes if the user is logged in or not and send it to the front
router.get('/api/user/auth', async (req, res) => {
  const auth = await req.cookies.jwt  
  if (!auth) {
    res.status(401).json('No user is logged in')
  } else {
    res.status(200).json('User is authenticated')
  }
})

// Logout the user
// Sets a empty cookie that expires after 1ms
router.get('/api/user/logout', async (req, res) => {
  const auth = await req.cookies.jwt
  
  if (!auth) {
    res.status(401)
  } else {
    res.cookie('jwt', '', { maxAge: 1 })
    res.status(200).json('User is logged out!')
  } 
})

module.exports = router;
const express = require("express");
// const mongoose = require("express");
const UserModel = require("../models/user.model");
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')

const userController = require('../controllers/user')


router.post('/api/user/register', async (req, res) => {
  console.log(req.body)
  const { email, password } = req.body;
  const emailExist = await UserModel.exists({ email: email })

  if (emailExist) {
    return res.status(400).json("Email already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const Newuser = {
        email: email,
        password: hashedPassword
    }

    try {
        const user = await UserModel.create(Newuser)
        return res.status(201).json(user)
    } catch (err) {
        return res.json({ message: err })
    }

})

router.post('/api/user/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.exists({ email: email })

  if (!user) {
    // om ingen användare finns returnerar vi ett error
    return res.status(404).json("Wrong username not found");
  }

  try {
    res.cookie('jwt', 'nicklas', { httpOnly: true })
    res.status(200).json(user)
  } catch (error) {
    console.log(error)
  }

})

router.get('/api/user/auth', async (req, res) => {
  const auth = await req.cookies.jwt
  
  if (!auth) {
    res.status(401)
  } else {
    res.status(200).json(auth)
  }
})

router.get("/api/user", async (req, res) => {
  // console.log(req.cookieSession)
  const docs = await UserModel.find({});
  res.status(200).json(docs);
});


// Delete one item with ID
router.delete('/api/user/:id', async (req, res) => {
  const doc = await UserModel.findById(req.params.id);
  UserModel.deleteOne(doc, (error) => {
    if (error) {
      console.error(error)
    } else return
  })
  console.log(doc)
})

module.exports = router;
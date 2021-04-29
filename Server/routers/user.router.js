const express = require("express");
const UserModel = require("../models/user.model");
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken')

router.post('/api/user/register', async (req, res) => {
  const { email, password } = req.body;
  const emailExist = await UserModel.exists({ email: email })

  if (emailExist) {
    res.status(400).json("Email already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const Newuser = {
        email: email,
        password: hashedPassword
    }

    try {
        const user = await UserModel.create(Newuser)
        res.status(201).json('User has been logged in')
    } catch (err) {
        res.status(400).json({ message: err })
    }
})

router.post('/api/user/login', async (req, res) => {
  const { email, password } = req.body;
  const maxAge = 1 * 24 * 60 * 60

  const user = await UserModel.exists({ email: email })

  const createToken = (id) => {
    return jwt.sign(id, 'magic secret')
  }

  if (!user) {
    return res.status(404).json("Wrong username not found");
  }

  try {
    const token = createToken(email)
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
    res.status(200).json('User is logged in')
  } catch (error) {
    res.status(400).json(error)
  }

})

router.get('/api/user/auth', async (req, res) => {
  const auth = await req.cookies.jwt  
  if (!auth) {
    res.status(401)
  } else {
    res.status(200).json('User is authenticated')
  }
})


router.get("/api/user", async (req, res) => {
  const docs = await UserModel.find({});
  res.status(200).json(docs);
});


router.get('/api/user/logout', async (req, res) => {
  const auth = await req.cookies.jwt
  
  if (!auth) {
    res.status(401)
  } else {
    res.cookie('jwt', '', { maxAge: 1 })
    res.status(200).json('User is logged out!')
  } 
})

// Delete one item with ID
router.delete('/api/user/:id', async (req, res) => {
  const doc = await UserModel.findById(req.params.id);
  UserModel.deleteOne(doc, (error) => {
    if (error) {
      res.status(400).json(error)
    } else return
  })
 res.status(200).json('User has been deleted')
})

module.exports = router;
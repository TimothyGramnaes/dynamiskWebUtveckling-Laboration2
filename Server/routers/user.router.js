const express = require("express");
// const mongoose = require("express");
const UserModel = require("../models/user.model");
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken')




router.post('/api/user/register', async (req, res) => {
  const { userName, password } = req.body;
  /// users får tillbakka en array med req userName objekt!!!!
  // Check if the user already exists
  const usernameExist = await UserModel.exists({ userName: userName })

  if (usernameExist) {
    return res.status(400).json("Username already exists");
  }
  // Hash the password and save the user
  const hashedPassword = await bcrypt.hash(password, 10);
  const Newuser = {
    userName: userName,
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
  //console.log(req.cookieSession)
  const { userName, password } = req.body;

  /// users får tillbakka en array med req userName objekt!!!!
  // Check if the user already exists


  // hittar en användare på användarnamn
  const user = await UserModel.findOne({ userName: userName })


  if (!user) {
    // om ingen användare finns returnerar vi ett error
    return res.status(404).json("Wrong username not found");
  }


  /// jämför password från req och userns password i db 
  const verified = bcrypt.compareSync(password, user.password)
  if (!verified) {
    return res.status(401).json('wrong password')
  }


  // lägger till ett token på username som man sedan lägger i kakan
  // lägg super secret i en env fil för att den är superhemlig för att läsa av token
  const token = jwt.sign({ username: userName }, 'my super secret', { expiresIn: '365d' });
  return res.status(201).json(token)



})

router.get("/api/user", async (req, res) => {
  // console.log(req.cookieSession)
  const docs = await UserModel.find({});
  res.status(200).json(docs);
});


// Get one item
router.get('/api/user/:id', async (req, res) => {
  const docs = await UserModel.findById(req.params.id);
  res.status(200).json(docs);
})


router.post("/api/user", async (req, res) => {

  const doc = await UserModel.create(req.body);
  res.status(201).json(doc);
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
const express = require("express");
// const mongoose = require("express");
const UserModel = require("../models/user.model");

const router = express.Router();

router.post('/api/register', async (req, res) => {
  const { userName, password } = req.body;

  // Check if the user already exists
  const existingUser = UserModel.find(u => u.userName === userName);
  if (existingUser) {
    return res.status(400).json("Username already exists");
  }
  // Hash the password and save the user
  const hashedPassword = await bcrypt.hash(password, 10);
  const Newuser = {
    userName: userName,
    password: hashedPassword
  }
  const user = await UserModel.create(Newuser)

  //users.push(user);
  try {
    res.staus(201).json(user)
  } catch (err) {
    res.json({ message: err })
  }
  //res.status(201).json()

})

router.get("/api/user", async (req, res) => {
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
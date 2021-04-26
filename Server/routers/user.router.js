const express = require("express");
// const mongoose = require("express");
const UserModel = require("../models/user.model");
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken')

const userController = require('../controllers/user')


router.post('/api/user/register', userController.register)


router.post('/api/user/login', userController.login)



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
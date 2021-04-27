const { response } = require("express");
const express = require("express");
// const mongoose = require("express");
const PostModel = require("../models/post.model");

const router = express.Router();


router.get("/api/post", async (req, res) => {
  const docs = await PostModel.find({});

  res.status(200).json(docs);
});

// Get user specific posts
// router.get("/api/post", async (req, res) => {
//   const docs = await PostModel.find().populate("userId");
//   res.status(200).json(docs);
// });
router.get("/api/admin/post", async (req, res) => {

  const auth = req.cookies.jwt
 
  const user = 2 // Token id from cookie
  const admin = false // ModelPost.user.Id == ture || false

  if(!admin) {
     const docs = await PostModel.find({ userId: auth});
     res.status(200).json(docs)
  } else if (admin) {
    const docs = await PostModel.find();
    res.status(200).json(docs)
  } else {
    res.status(400).json('No Post')
  }

});

// Get one item
router.get('/api/post/:id', async (req, res) => {
  
  const docs = await PostModel.findById(req.params.id);
  res.status(200).json(docs);
})

router.post("/api/admin/post", async (req, res) => {
  const auth = req.cookies.jwt
  console.log(auth)
  const post = {
    userId: auth,
    title: req.body.title,
    salt: req.body.salt,
  }
  const doc = await PostModel.create(post);
  res.status(201).json(doc);
});


// Delete one item with ID
router.delete('/api/post/:id', async (req, res) => {

  const doc = await PostModel.findById(req.params.id);
  PostModel.deleteOne(doc, (error) => {
    if (error) {
      console.error(error)
    } else return
  })
  console.log(doc)
})

module.exports = router;

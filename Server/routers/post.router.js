const express = require("express");
// const mongoose = require("express");
const PostModel = require("../models/post.model");

const router = express.Router();


router.get("/api/post", async (req, res) => {
  const docs = await PostModel.find({});

  res.status(200).json(docs);
});

// Get user specific posts
router.get("/api/post", async (req, res) => {
  const docs = await PostModel.find().populate("userId");
  res.status(200).json(docs);
});

// Get one item
router.get('/api/post/:id', async (req, res) => {
  const docs = await PostModel.findById(req.params.id);
  res.status(200).json(docs);
})

router.post("/api/post", async (req, res) => {
  const doc = await PostModel.create(req.body);
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

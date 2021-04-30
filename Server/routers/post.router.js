const express = require("express");
const PostModel = require("../models/post.model");

const router = express.Router();

router.get("/api/post", async (req, res) => {
  const docs = await PostModel.find({});
  res.status(200).json(docs);
});

router.get("/api/admin/post", async (req, res) => {

  const auth = req.cookies.jwt

  const admin = false // ModelPost.user.Id == trure || false

  if (!admin) {
    const docs = await PostModel.find({ userId: auth });
    res.status(200).json(docs)
  } else if (admin) {
    const docs = await PostModel.find();
    res.status(200).json(docs);
  } else {
    res.status(400).json("No Post");
  }
});

// Get one item
router.get("/api/post/:id", async (req, res) => {
  const docs = await PostModel.findById(req.params.id);
  res.status(200).json(docs);
});

router.post("/api/admin/post", async (req, res) => {
  const auth = req.cookies.jwt
  const post = {
    userId: auth,
    title: req.body.title,
    content: req.body.content,
  }
  const doc = await PostModel.create(post);
  res.status(201).json(doc);
});

// Change a post
router.put("/api/admin/post/:id", (req, res) => {

  const post = {
    title: req.body.changeTitle,
    content: req.body.changeContent
  }
  
  PostModel.findByIdAndUpdate({ _id: req.params.id }, post).then(
    function () {
      PostModel.findOne({ _id: req.params.id }).then(function (post) {
        res.status(200).json(post);
      });
    }
  );
});

// Delete one item with ID
router.delete("/api/post/:id", async (req, res) => {
  const doc = await PostModel.findById(req.params.id);
  PostModel.deleteOne(doc, (error) => {
    if (error) {
      res.status(400).json(error)
    } else {
      res.status(201).json(doc)
    }
  });
});

module.exports = router;

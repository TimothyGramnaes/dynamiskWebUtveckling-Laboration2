const express = require("express");
const PostModel = require("../models/post.model");
const router = express.Router();

/// Hämtar alla posts
router.get("/api/post", async (req, res) => {
  const docs = await PostModel.find({});
  res.status(200).json(docs);
});

/// Hämtar alla poster från användaren
router.get("/api/admin/post", async (req, res) => {

  const auth = req.cookies.jwt

  const admin = false

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


/// Skapar en post
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

/// Ändrar en post
router.put("/api/admin/post/:id", async (req, res) => {
  try {
    await PostModel.findByIdAndUpdate({ _id: req.params.id }, req.body)
    res.status(200).json({ message: "Post sucsessfully edited!" });

  } catch (error) {
    res.status(400).json({ message: "Something went wrong!", error: error });
  }


});

/// Tar bort en post 
router.delete("/api/post/:id", async (req, res) => {
  const doc = await PostModel.findById(req.params.id);
  PostModel.deleteOne(doc, (error) => {
    if (error) {
      res.status(400).json(error)
    } else {
      res.status(200).json({ message: "Post sucessfully deleted" })
    }
  });
});

module.exports = router;

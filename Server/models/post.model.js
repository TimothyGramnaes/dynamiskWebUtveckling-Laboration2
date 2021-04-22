const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    authorKey: "string",
    author: "string",
    title: "string",
    salt: "string",
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("post", postSchema);

module.exports = PostModel;

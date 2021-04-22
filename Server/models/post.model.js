const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    authorKey: "String",
    author: "String",
    title: "String",
    salt: "String",
  }
);

const PostModel = mongoose.model("post", postSchema);

module.exports = PostModel;

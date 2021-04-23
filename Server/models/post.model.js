const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    authorKey: "String",
    userId: 'String',
    title: "String",
    salt: "String",
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("post", postSchema);

module.exports = PostModel;

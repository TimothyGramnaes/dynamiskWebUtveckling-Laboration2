const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: 'String',
    title: "String",
    content: "String",
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("post", postSchema);

module.exports = PostModel;

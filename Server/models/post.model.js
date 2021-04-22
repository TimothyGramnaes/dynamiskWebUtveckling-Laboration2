const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    authorKey: "String",
    // userId: { type: Types.ObjectId, ref: 'user', required: true },
    title: "String",
    salt: "String",
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("post", postSchema);

module.exports = PostModel;

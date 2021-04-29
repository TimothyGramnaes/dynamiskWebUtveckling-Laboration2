const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: 'String',
    title: {
      type: "String",
    },
    content: {
      type: "String",
    }
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("post", postSchema);

module.exports = PostModel;

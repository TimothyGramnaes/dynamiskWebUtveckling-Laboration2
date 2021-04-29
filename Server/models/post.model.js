const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: 'String',
    title: {
      type: "String",
    },
    content: {
      type: "String",
      minlength: 1
    }
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("post", postSchema);

module.exports = PostModel;

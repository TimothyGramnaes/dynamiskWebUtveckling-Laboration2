const mongoose = require("mongoose");
//const { checkUser } = require("./middleware/authMiddleware");

const postSchema = new mongoose.Schema(
  {
    //  user: checkUser.user,
    userId: "String",
    title: {
      type: "String",
    },
    content: {
      type: "String",
    },
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("post", postSchema);

module.exports = PostModel;

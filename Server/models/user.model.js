const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: "string",
  email: "string",
  password: "string",
  //   userId: { type: Types.ObjectId, ref: 'user', required: true }
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;

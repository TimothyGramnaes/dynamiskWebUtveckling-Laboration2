const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");

// check current user
const checkUser = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, "magic secret", async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.locals.user = null;
        next();
      } else {
        console.log(decodedToken);
        console.log("hej");
        let user = await UserModel.findById(decodedToken.id);
        res.locals.user = user;
        console.log(user);
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports = { checkUser };

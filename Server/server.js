const express = require("express");
const mongoose = require("mongoose");
const postRouter = require("./routers/post.router");
const userRouter = require("./routers/user.router");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const { checkUser } = require("./middleware/authMiddleware");

const app = express();
app.use(cookieParser());

app.use(express.json());
app.get("/", (req, res) => res.json("HÄÄÄÄÄÄÄÄÄÄJ!!!!"));
app.get("*", checkUser);
app.use(postRouter);
app.use(userRouter);

app.use(
  cookieSession({
    name: "session",
    secret: "aVeryS3cr3tK3y",
    secure: false,
    maxAge: 1000 * 60,
    httpOnly: true,
  })
);

//server.use('/posts', postsRoutes)

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json(err.message);
});

async function run() {
  try {
    await mongoose.connect(
      "mongodb+srv://timpa:slarvkorv@cluster0.ddegw.mongodb.net/saltfactory",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("database is connected");
  } catch (error) {
    console.error(error);
  }
}

const auth = (req, res, next) => {
  const ok = false;

  if (ok === false) {
    res.send("Funkar inte");
  } else {
    next();
  }
};

app.get("/admin", auth, (req, res) => {
  res.send("Funkar");
});

app.listen(3001, () => {
  console.log("Server is running");
});

run();

const express = require("express");
const mongoose = require("mongoose");
const postRouter = require("./routers/post.router");
const userRouter = require("./routers/user.router");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());

app.use(cookieParser());

app.use(postRouter);
app.use(userRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json(err.message);
});

async function run() {
  try {
    await mongoose.connect(
      "mongodb+srv://first-test-user:1000Tunland@cluster0.97bq1.mongodb.net/test",
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

// Start the server at port 3001
app.listen(3001, () => {
  console.log("Server is running");
});

run();

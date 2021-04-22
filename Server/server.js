const express = require("express");
const mongoose = require("mongoose");
const postRouter = require("./routers/post.router");

const app = express();

app.use(express.json());
app.get("/", (req, res) => res.json("HÄÄÄÄÄÄÄÄÄÄJ!!!!"));
app.use(postRouter);
//server.use('/posts', postsRoutes)

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json(err.message);
});

async function run() {
  try {
    await mongoose.connect("mongodb://localhost:27017/post", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database is connected");
  } catch (error) {
    console.error(error);
  }
}

app.listen(3001, () => {
  console.log("Server is running");
});

run();
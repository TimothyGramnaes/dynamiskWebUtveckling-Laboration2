const express = require("express");
const mongoose = require("mongoose");
const postRouter = require("./routers/post.router");
const userRouter = require("./routers/user.router");

const app = express();

app.use(express.json());
app.get("/", (req, res) => res.json("HÄÄÄÄÄÄÄÄÄÄJ!!!!"));
app.use(postRouter);
app.use(userRouter);
//server.use('/posts', postsRoutes)

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json(err.message);
});

async function run() {
  try {
    await mongoose.connect("mongodb+srv://dbAdmin:dbAdmin@clusterdev.9j1cn.mongodb.net/salt", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database is connected");
  } catch (error) {
    console.error(error);
  }
}


const auth = (req, res, next) => {
  const ok = false

  if (ok === false) {
    res.send('Funkar inte')
  } else {
    next()
  }
}

app.get('/admin', auth, (req, res) => {
  res.send('Funkar')
})

app.listen(3001, () => {
  console.log("Server is running");
});

run();
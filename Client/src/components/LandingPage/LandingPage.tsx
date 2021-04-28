import React, { useEffect } from "react";
import "./LandingPage.css";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import { CSSProperties } from "@material-ui/styles";

// import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import ThumbDownIcon from '@material-ui/icons/ThumbDown';
// import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
// import BloggPostComponent from '../bloggPost/BloggPost';

// import Button from '@material-ui/core/Button';

interface Posts {
  title: string;
  content: string;
  _id: number;
}

function LandingPage() {
  const postStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "60rem",
    margin: "1rem auto",
    border: "solid 1px black",
    borderRadius: "5px",
    padding: "0.5rem 2rem",
  };

  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    const options = {
      method: "get",
    };

    const fetchPosts = async () => {
      await fetch("/api/post", options)
        .then(function (res) {
          if (res.status === 400) {
            return;
          }
          // console.log(res)
          return res.json();
        })
        .then(function (data) {
          // console.log(data)

          setPosts(data);
        })
        .catch(function (err) {
          console.log(err);
        });
    };

    fetchPosts();
  });

  const postsList = posts.map((p) => (
    <div style={postStyle} key={p._id}>
      <h4>{p.title}</h4>
      <p>{p.content}</p>
    </div>
  ));
  return (
    <Grid container className="layoutMainContainer">
      <Grid container>{postsList}</Grid>
    </Grid>
    //   </Grid>
    //   <div>
    //     <h2></h2>
    //   </div>
    // </Grid>
  );
}

export default LandingPage;

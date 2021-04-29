import  { useEffect } from "react";
import "./LandingPage.css";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import "./LandingPage.css";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

interface Posts {
  title: string;
  content: string;
  _id: number;
}

function LandingPage() {

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
          return res.json();
        })
        .then(function (data) {

          setPosts(data);
        })
        .catch(function (err) {
          console.error(err);
        });
    };

    fetchPosts();
  });

  const postsList = posts.map((p) => (
    <div className="your-posts-container" key={p._id}>
      <div className="post-container">
        <h4>{p.title}</h4>
        <p>{p.content}</p>
        <div className="breaker"></div>
        <div className="actions">
          <div className="action">
            <p>LIKE</p>
            <ThumbUpIcon fontSize="small" className="icons" />
          </div>
          <div className="action">
            <p>DISLIKE</p>
            <ThumbDownIcon fontSize="small" className="icons" />
          </div>
          <div className="action">
            COMMENT
            <ChatBubbleIcon fontSize="small" className="icons" />
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <Grid container className="layoutMainContainer">
      <Grid className="displayer" container>
        {postsList}
      </Grid>
    </Grid>
  );
}

export default LandingPage;

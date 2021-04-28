import React from "react";
import "./LandingPage.css";
import { Grid } from "@material-ui/core";

// import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import ThumbDownIcon from '@material-ui/icons/ThumbDown';
// import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import BloggPostComponent from "../bloggPost/BloggPost";

// import Button from '@material-ui/core/Button';

function LandingPage() {
  return (
    <Grid container className="layoutMainContainer">
      <Grid container>
        <Grid container xs={6} md={6} className="search">
          <div className="search-bar">
            <input
              className="text-input"
              type="text"
              name="search-salts"
              placeholder="Give your fellow magic players your salts"
            />

            <button className="search-btn" type="submit" value="post">
              POST
            </button>
          </div>
        </Grid>
        <Grid container xs={6} md={6}>
          <span></span>
        </Grid>
      </Grid>

      <Grid className="titles" container>
        <Grid container xs={8} md={8}>
          <h3>Latest Posts</h3>
        </Grid>
        <Grid container xs={4} md={4}>
          <h3>Latest News</h3>
        </Grid>
      </Grid>

      <Grid container>
        <Grid className="posts-column-container" container xs={8} md={8}>
          {/* <BloggPostComponent /> */}
        </Grid>

        <Grid container xs={4} md={4}>
          <h3>News</h3>
        </Grid>
      </Grid>
      <div>
        <h2></h2>
      </div>
    </Grid>
  );
}

export default LandingPage;

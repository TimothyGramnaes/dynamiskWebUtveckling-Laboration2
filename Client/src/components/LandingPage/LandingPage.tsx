import React from 'react';
import './LandingPage.css'
import { Grid } from '@material-ui/core';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

// import Button from '@material-ui/core/Button';

function LandingPage() {
    return(
        <Grid container className="layoutMainContainer">
            <Grid container>

                <Grid container xs={6} md={6} className="search">
                    <form>
                        <input className="text-input" type="text" name="search salts" />
                        <input className="search-btn" type="submit" value="submit" />
                    </form>
                </Grid>
                <Grid container xs={6} md={6}>
                    <span>

                    </span>
                </Grid>
            </Grid>

            <Grid container>
                <Grid container xs={8} md={8}>
                    <h3>
                        Latest Posts
                    </h3>
                </Grid>
                <Grid container xs={4} md={4}>
                    <h3>
                        Latest News
                    </h3>
                </Grid>

            </Grid>

            <Grid container>
                <Grid className="posts-column-container" container xs={8} md={8}>
                    <Grid item className="post-container">
                        <div className="user">
                            <h4>
                                John Doe
                            </h4>
                        </div>
                        <div className="user-post">
                            <p>
                                Lorem ipsum dolor sit amet consectetur, 
                                adipisicing elit. Aliquam, velit magni molestiae 
                                quam numquam veritatis sunt animi libero repellat, 
                                rem exercitationem eos quia perferendis laboriosam, 
                                voluptatum nesciunt facilis molestias unde.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet consectetur, 
                                adipisicing elit. Aliquam, velit magni molestiae 
                                quam numquam veritatis sunt animi libero repellat, 
                                rem exercitationem eos quia perferendis laboriosam, 
                                voluptatum nesciunt facilis molestias unde.
                            </p>

                        </div>
                        <div className="actions">
                            <div className="action">
                                <p>LIKE</p>
                                <ThumbUpIcon className="icons" />
                            </div>
                            <div className="action">
                                <p>DISLIKE</p>
                                <ThumbDownIcon className="icons" />
                            </div>
                            <div className="action">
                                COMMENT
                                <ChatBubbleIcon className="icons" />
                            </div>

                        </div>
                        
                    </Grid>

                </Grid>

                <Grid container xs={4} md={4}>
                    <h3>
                        News
                    </h3>
                </Grid>

            </Grid>
        <div>
            <h2>
                
            </h2>
        </div>
        </Grid>
    )
}

export default LandingPage;
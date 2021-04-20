import React from "react";
import Card from "@material-ui/core/Card";
import {
  Avatar,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@material-ui/core";
import ThreeDRotationIcon from "@material-ui/icons/ThreeDRotation";
function BloggPostComponent() {
  return (
    <Card style={{ width: "40rem" }}>
      <CardContent>
        <CardHeader
          avatar={<Avatar>OW</Avatar>}
          title={<Typography>Your name</Typography>}
        />
        <Typography color="textSecondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam augue
          sollicitudin nam purus. Non arcu, amet etiam odio aenean ac gravida in
          faucibus. Pretium, congue morbi duis vitae in elit, amet. Duis quam
          eleifend est nunc, nulla. Maecenas eu fermentum porttitor nulla vitae
          orci quis sed sed. Turpis nisl donec nam lacinia ac facilisis
          tristique enim gravida. Est venenatis vulputate pretium ornare. Eget
          etiam amet, pellentesque et aliquam. Leo duis libero eu nunc laoreet
          urna consequat egestas.
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <ThreeDRotationIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default BloggPostComponent;

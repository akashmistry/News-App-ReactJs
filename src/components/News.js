import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Grid } from "@mui/material";
import NewsDetails from "../components/NewsDetails";
import { pink } from "@mui/material/colors";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function News({ news, id }) {
  const [fav, setFav] = React.useState(false);
  const addToFavHandler = (news) => {
    const curUser = localStorage.getItem("current-user");
    setFav(!fav);
  };

  return (
    <Card
      sx={{ maxWidth: 345, minHeight: 500 }}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        height="194"
        image={
          news.urlToImage ||
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
        }
        alt="Paella dish"
      />

      <CardContent>
        <Typography style={{ color: "black", fontWeight: 800 }}>
          {news.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {news.description}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <Grid
          container
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid item>
            <IconButton
              aria-label="add to favorites"
              onClick={() => {
                addToFavHandler(news);
              }}
            >
              {fav ? (
                <FavoriteIcon sx={{ color: pink[500] }} />
              ) : (
                <FavoriteIcon />
              )}
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <NewsDetails news={news} />
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

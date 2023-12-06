import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Grid } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function NewsDetails({ news }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
          boxShadow: "0px 4px 32px rgba(252, 56, 56, 0.4)",
          borderRadius: 100,
          paddingLeft: 24,
          paddingRight: 24,
          color: "#ffffff",
        }}
      >
        Read More
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card
          sx={style}
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
            <Typography
              style={{ color: "gray", fontWeight: 800, textAlign: "right" }}
            >
              ~{news.author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Source: {news.source.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {news.content}
            </Typography>
            <br />
            <Typography variant="body2" color="text.secondary">
              Published at: {news.publishedAt}
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            <Grid
              container
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Grid item>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <Button>
                  <a style={{ textDecoration: "none" }} href={news.url}>
                    Full Article
                  </a>
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Modal>
    </div>
  );
}

import React from "react";
import NewsList from "../components/NewsList";
import { Grid } from "@mui/material";
const Home = () => {
  return (
    <div>
      <Grid
        container
        style={{
          backgroundColor: "#dddd",
          padding: "10px",
          marginTop: "50px",
          justifyContent: "center",
        }}
      >
        <NewsList />
      </Grid>
    </div>
  );
};

export default Home;

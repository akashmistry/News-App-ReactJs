import React from "react";
import NewsList from "../components/NewsList";
import { Grid } from "@mui/material";
import Controller from "./Controller";
const Home = () => {
  const [type, setType] = React.useState("");

  const handleChange = (event) => {
    setType(event.target.value);
  };
  return (
    <div>
      <Controller type={type} handleChange={handleChange} />
      <Grid
        container
        style={{
          backgroundColor: "#dddd",
          padding: "10px",
          justifyContent: "center",
        }}
      >
        <NewsList category={type} />
      </Grid>
    </div>
  );
};

export default Home;

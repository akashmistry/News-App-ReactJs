import React, { useEffect, useState } from "react";
import News from "../components/News";
import axios from "axios";
import { Grid } from "@mui/material";

const NewsList = ({ category }) => {
  const [article, setArticles] = useState([]);
  useEffect(() => {
    getNews();
  }, [category]);
  const getNews = () => {
    axios(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=ca7eb5a936f147de9beb487aaf5b7961`
    )
      .then((res) => {
        setArticles(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Grid container spacing={1} style={{ width: "80%" }}>
      {article.map((news, index) => (
        <Grid item lg={12 / 4} key={index} md>
          <News news={news} id={index} />
        </Grid>
      ))}
    </Grid>
  );
};

export default NewsList;

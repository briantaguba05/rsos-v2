import React, { useEffect, useState } from "react";
import Axios from "axios";
import NewsItem from "./NewsItem";

const News = () => {
  const { articles, setArticles } = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    fetch("/api/data")
      .then((res) => res.json())
      .then((articles) => {
        setArticles(articles);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const getArticles = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/top-headlines?country=ph&apiKey=ccee13ddd92842ba878ba0282a0c1ca4"
      );

      setArticles(res.data.articles);
      console.log(res);
    };
    getArticles();
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }
  if (error || !Array.isArray(articles)) {
    return <p>There was an error loading your data!</p>;
  }

  return (
    <>
      {articles.map(({ title, description, url, urlToImage }) => (
        <NewsItem
          title={title}
          description={description}
          url={url}
          urlToImage={urlToImage}
        />
      ))}
    </>
  );
};

export default News;

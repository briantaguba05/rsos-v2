import React from "react";
import News from "./News";
import Axios from "axios";

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <div>
      <img src={urlToImage} alt="New Image" />
      <h3>
        <a href={url}>{title}</a>
      </h3>
      <p>{description}</p>
    </div>
  );
};

export default NewsItem;

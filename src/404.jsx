import { CenterFocusStrong } from "@material-ui/icons";
import React from "react";
import Navbar from "./components/Navbar";
import pnf from "./images/page404.png";

const divMain = {
  textAlign: "center",
};
const divStyle = {
  padding: "px 30px 30px 30px",
  backgroundColor: "#fff",
};

const divStyle2 = {
  padding: "50px 50px 50px 50px",
  backgroundColor: "#fff",
};
const PageNotFound = () => {
  return (
    <div id="wrapper">
      <div style={divMain}>
        <Navbar />
        <div style={divStyle2}></div>

        <img height="80%" width="80%" src={pnf} />

        <div style={divStyle} id="info">
          <h2>404 PAGE NOT FOUND!</h2>
          <h3>The page may have gone on a trip...</h3>
          <h3>But it will return soon!</h3>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;

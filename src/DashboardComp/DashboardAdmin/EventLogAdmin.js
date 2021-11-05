import React, { useState } from "react";
import firedb from "../../firebase";

const EventLogUser = () => {
  const [info, setInfo] = useState([]);

  window.addEventListener("load", () => {
    Fetchdata();
  });

  const Fetchdata = () => {
    firedb
      .collection("sos")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          var data = element.data();
          setInfo((arr) => [...arr, data]);
        });
      });
  };

  return (
    <div>
      <center>
        <div>EVENTS LOG</div>
      </center>
      {
        info.map((data) => (
        <Frame id={data.id} lat={data.lat} long={data.long} />
        ))
      }
    </div>
  );
};

const Frame = ({ id, lat, long }) => {
  console.log(id + " " + lat + " " + long);
  return (
    <center>
      <div className="div">
        <p>ID # : {id}</p>

        <p>Latitude : {lat}</p>

        <p>Longitude : {long}</p>
      </div>
    </center>
  );
};

export default EventLogUser;

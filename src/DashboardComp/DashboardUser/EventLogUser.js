import { data } from "jquery";
import React, { useState } from "react";
import firedb from "../../firebase";

const EventLogUser = () => {
  const [info, setInfo] = useState([]);
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);

  window.addEventListener("load", () => {
    Fetchdata();
  });

  const Fetchdata = () => {
    firedb
      .collection("sos")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          const data = element.data();
          setInfo((arr) => [...arr, data]);
        });
      });
  };

  return (
    <>
      <div>EVENTS LOG</div>
      {info.map((data) => (
        <Frame info={data.id} lat={data.lat} long={data.long} />
      ))}
    </>
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

import React, { useState, useEffect, useRef } from "react";
import ReactMapGL from "react-map-gl";
import { MapDiv } from "./MapboxElements";

export default function Mapbox() {
  ReactMapGL.accessToken =
    "pk.eyJ1IjoiYnJpYW50YWd1YmEwNSIsImEiOiJja3BocGh3OW0wNXNiMm5scnQ1N3ppeDl2In0.tpxE3GPd7dsTSzAKZkl8Dg";
  const [viewport, setViewport] = useState({
    latitude: 14.5995,
    longitude: 120.9842,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

  return (
    <>
      <MapDiv>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={ReactMapGL.accessToken}
          mapStyle="mapbox://styles/briantaguba05/ckpi9zz2706rp17nytrhcwyxy"
          onViewportChange={(viewport) => {
            setViewport(viewport);
          }}
        >
          *Input markers here*
        </ReactMapGL>
      </MapDiv>
    </>
  );
}

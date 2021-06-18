import React from "react";
import Mapbox from "../components/Map/Mapbox";
import Dashboard from "../Dashboard/Dashboard";
import fire from "../firebase";

const dashboard = () => {
  const handleLogout = () => {
    fire.auth().signOut();
  };
  return (
    <>
      <Dashboard handleLogout={handleLogout} />
      <Mapbox />
    </>
  );
};

export default dashboard;

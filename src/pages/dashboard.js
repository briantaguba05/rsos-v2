import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import fire from "../firebase";
import ScrollToTop from "../components/ScrollToTop";
import GMap from "../components/Map/GoogleMap";

const dashboard = () => {
  const handleLogout = () => {
    fire.auth().signOut();
  };
  return (
    <>
      <ScrollToTop />
      
      <Dashboard handleLogout={handleLogout} />
      {/*<Mapbox />*/}
      <GMap />
    </>
  );
};

export default dashboard;

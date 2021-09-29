import React from "react";
import Mapbox from "../components/Map/Mapbox";
import Dashboard from "../Dashboard/Dashboard";
import fire from "../firebase";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import ScrollToTop from "../components/ScrollToTop";
import GMap from "../components/Map/GoogleMap";
import Gtest from "../components/Map/Googletest";

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

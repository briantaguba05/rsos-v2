import React from "react";
import Mapbox from "../components/Map/Mapbox";
import Dashboard from "../Dashboard/Dashboard";
import fire from "../firebase";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import ScrollToTop from "../components/ScrollToTop";

const dashboard = () => {
  const handleLogout = () => {
    fire.auth().signOut();
  };
  return (
    <>
      <ScrollToTop />

      <Dashboard handleLogout={handleLogout} />
      <Mapbox />
    </>
  );
};

export default dashboard;

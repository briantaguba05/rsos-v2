import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import SidebarDash from "./SidebarDash";
import Topbar from "./Topbar";
import GMap from "../components/Map/GoogleMap";
import styled from "styled-components";
import fire from "../firebase";

const DashCont = styled.div`
  display: flex;
  margin-top: 10px;
`;
const DashboardFin = () => {
  const handleLogout = () => {
    fire.auth().signOut();
  };
  return (
    <>
      <ScrollToTop />
      <Topbar />
      <DashCont>
        <SidebarDash />
        <GMap />
      </DashCont>
    </>
  );
};

export default DashboardFin;

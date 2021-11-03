import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import SidebarDash from "./SidebarDash";
import Topbar from "./Topbar";
import GMap from "../components/Map/GoogleMap";
import styled from "styled-components";
import EventLog from "./EventLog";

const DashCont = styled.div`
  display: flex;
  margin-top: 10px;
`;
const DashboardFin = () => {
  return (
    <>
      <ScrollToTop />
      <Topbar />
      <DashCont>
        <SidebarDash />
        <GMap />
        <EventLog />
      </DashCont>
    </>
  );
};

export default DashboardFin;

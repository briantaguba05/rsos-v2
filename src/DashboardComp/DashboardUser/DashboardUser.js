import React, { Component } from "react";
import ScrollToTop from "../../components/ScrollToTop";
import SidebarDash from "./SidebarDash";
import Topbar from "./Topbar";
import GMap from "../../components/Map/GoogleMap";
import styled from "styled-components";
import EventLog from "./EventLogUser";

const DashCont = styled.div`
  display: flex;
  margin-top: 10px;
`;
export default class DashboardUser extends Component {
  render() {
    return (
      <>
        <h3>THIS IS USER DASHBOARD</h3>
        <ScrollToTop />
        <Topbar />
        <DashCont>
          <SidebarDash />
          <GMap />
          <EventLog />
        </DashCont>
      </>
    );
  }
}

import React, { Component } from "react";
import ScrollToTop from "../../components/ScrollToTop";
import SidebarDash from "./SidebarDash";
import Topbar from "./Topbar";
import GMap from "../../components/Map/GoogleMap";
import styled from "styled-components";
import EventLog from "./EventLogAdmin";

const DashCont = styled.div`
  display: flex;
  margin-top: 10px;
`;
export default class DashboardAdmin extends Component {
  render() {
    return (
      <>
        <h3>THIS IS ADMIN DASHBOARD</h3>
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

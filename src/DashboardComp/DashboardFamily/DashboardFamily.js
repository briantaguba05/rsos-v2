import React, { Component } from "react";
import ScrollToTop from "../../components/ScrollToTop";
import SidebarDash from "./SidebarDash";
import Topbar from "./Topbar";
import GMap from "../../components/Map/GoogleMap";
import styled from "styled-components";
import EventLog from "./EventLogFamily";

const DashMain = styled.div`
  justify-content: center;
`;
const DashCont = styled.div`
  display: flex;
  margin-top: 10px;
`;
export default class DashboardFamily extends Component {
  render() {
    return (
      <>
        <DashMain>
          <ScrollToTop />
          <Topbar />

          <DashCont>
            <SidebarDash />
            <GMap />
          </DashCont>

          <DashCont>
            <EventLog />
          </DashCont>
        </DashMain>
      </>
    );
  }
}

import React, { Component } from "react";
import ScrollToTop from "../../components/ScrollToTop";
import SidebarDash from "./SidebarDash";
import Topbar from "./Topbar";
import GMap from "../../components/Map/GoogleMap";
import styled from "styled-components";
import EventLog from "./EventLogAdmin";
import AdminConfirmUser from "./AdminConfirmUser";
import GetUser from "./GetUser";
import ListUser from "./ListUser";
import ShowUser from "./ShowUser";

const DashMainAdmin = styled.div`
  margin: auto;
  justify-content: center;
`;
const DashCont = styled.div`
  align-items: center;
  justify-content: space-between;
  margin: auto;
  display: flex;
  margin-top: 10px;
`;
export default class DashboardAdmin extends Component {
  render() {
    return (
      <>
        <DashMainAdmin>
          <ScrollToTop />
          <Topbar />

          <DashCont>
            <SidebarDash />
            <GMap />
          </DashCont>
        </DashMainAdmin>
      </>
    );
  }
}

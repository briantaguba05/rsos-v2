import React, { Component } from "react";
import ScrollToTop from "../../components/ScrollToTop";
import SidebarDash from "./SidebarDash";
import Topbar from "./Topbar";
import GMap from "../../components/Map/GoogleMap";
import styled from "styled-components";
import EventLog from "./EventLogAdmin";
import AdminConfirmUser from "./AdminConfirmUser";

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
        <h3>THIS IS ADMIN DASHBOARD</h3>

        <DashMainAdmin>
          <ScrollToTop />
          <Topbar />

          <DashCont>
            <SidebarDash />
            <GMap />
            <AdminConfirmUser />
          </DashCont>
        </DashMainAdmin>
      </>
    );
  }
}

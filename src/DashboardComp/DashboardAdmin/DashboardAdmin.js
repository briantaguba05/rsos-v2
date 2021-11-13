import React, { Component } from "react";
import ScrollToTop from "../../components/ScrollToTop";
import SidebarDash from "./SidebarDash";
import Topbar from "./Topbar";
import GMap from "../../components/Map/GoogleMap";
import styled from "styled-components";

const DashMainAdmin = styled.div`
  width: 100 %;
  min-height: 100px;
  background: white;
  font-family: "Montserrat", sans-serif;
`;

const DashCont = styled.div`
  align-items: center;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

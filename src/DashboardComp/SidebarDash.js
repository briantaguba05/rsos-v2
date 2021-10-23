import React, { useState } from "react";
import { useAuth } from "../components/AuthContext";
import { Link, useHistory } from "react-router-dom";
import {
  LineStyle,
  PermIdentity,
  Note,
  People,
  Cloud,
  Settings,
  ExitToApp,
} from "@material-ui/icons";

import {
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarTitle,
  SidebarList,
  SidebarListItem,
  SidebarLink,
} from "./SidebarDashElements";

const SidebarDash = () => {
  const [error, setError] = useState("");
  const [sidebar, setSidebar] = useState(false);
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/signin");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <SidebarContainer>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarTitle>Dashboard</SidebarTitle>
            <SidebarList>
              <SidebarLink to="/dashboard">
                <SidebarListItem activeClass="active">
                  <LineStyle SidebarIcon />
                  Dashboard
                </SidebarListItem>
              </SidebarLink>

              <SidebarLink to="/myinfo">
                <SidebarListItem active>
                  <PermIdentity SidebarIcon />
                  UserInfo
                </SidebarListItem>
              </SidebarLink>

              <SidebarLink to="/weather">
                <SidebarListItem>
                  <Cloud SidebarIcon />
                  Weather
                </SidebarListItem>
              </SidebarLink>

              <SidebarLink to="news">
                <SidebarListItem>
                  <Note SidebarIcon />
                  NEWS
                </SidebarListItem>
              </SidebarLink>

              <SidebarListItem>
                <People SidebarIcon />
                TEAMS
              </SidebarListItem>
            </SidebarList>
          </SidebarMenu>

          <SidebarMenu>
            <SidebarTitle>TITLE #2</SidebarTitle>
            <SidebarList>
              <SidebarLink to="">
                <SidebarListItem>
                  <Settings SidebarIcon />
                  Settings
                </SidebarListItem>
              </SidebarLink>

              <SidebarLink to="">
                <SidebarListItem>
                  <ExitToApp SidebarIcon onClick={handleLogout} />
                  Logout
                </SidebarListItem>
              </SidebarLink>
            </SidebarList>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default SidebarDash;

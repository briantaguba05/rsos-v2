import React, { useState } from "react";
import { useAuth } from "../components/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Popup from "../components/Popup";
import {
  LineStyle,
  PermIdentity,
  Note,
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

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SidebarContainer>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarTitle>Dashboard</SidebarTitle>
            <SidebarList>
              <SidebarLink to="/dashboard/user">
                <SidebarListItem activeClass="active">
                  <LineStyle SidebarIcon />
                  User Dashboard
                </SidebarListItem>
              </SidebarLink>

              <SidebarLink to="/dashboard/user/myinfo">
                <SidebarListItem active>
                  <PermIdentity SidebarIcon />
                  UserInfo
                </SidebarListItem>
              </SidebarLink>

              <SidebarLink to="/dashboard/weather">
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

              <SidebarLink onClick={handleLogout}>
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

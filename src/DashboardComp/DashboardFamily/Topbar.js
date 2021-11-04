import React from "react";
import { NotificationsNone, Language } from "@material-ui/icons";
import Avatar from "react-avatar";
import { useAuth } from "../../components/AuthContext";
import {
  TopAvatar,
  TopbarContainer,
  TopbarIconContainer,
  TopbarLogo,
  TopbarWrapper,
  TopIconBadge,
  TopLeft,
  TopRight,
} from "./TopbarElements";

const Topbar = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <TopbarContainer>
        <TopbarWrapper>
          <TopLeft>
            <TopbarLogo>Welcome Family Member!</TopbarLogo>
          </TopLeft>

          <TopRight>
            <TopbarIconContainer>
              <NotificationsNone />
              <TopIconBadge>2</TopIconBadge>
            </TopbarIconContainer>

            <TopbarIconContainer>
              <Language />
              <TopIconBadge>2</TopIconBadge>
            </TopbarIconContainer>

            <Avatar
              name={currentUser.name}
              googleID={currentUser.userID}
              size="50"
              round={true}
            />
          </TopRight>
        </TopbarWrapper>
      </TopbarContainer>
    </>
  );
};

export default Topbar;

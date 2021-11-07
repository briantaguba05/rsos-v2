import styled from "styled-components";
import { Link } from "react-router-dom";
/*react-router-dom for Link*/

export const SidebarContainer = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: white;
  position: sticky;
`;

export const SidebarWrapper = styled.div`
  padding: 20px;
  color: #555;
`;

export const SidebarMenu = styled.div`
  margin-bottom: 10px;
`;

export const SidebarTitle = styled.h3`
  font-size: 13px;
  color: rgb(187, 186, 186);
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 5px;
`;

export const SidebarListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  text-decoration: none;
  color: inherit;

  &.active {
    border-bottom: 3px solid #d90429;
  }
  &:hover {
    background-color: rgb(240, 240, 255);
  }
`;

export const SidebarIcon = styled.div`
  margin-right: 5px;
  font-size: 20px !important;
`;

export const SidebarLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

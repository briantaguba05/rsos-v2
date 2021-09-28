import styled from "styled-components";
import { Link } from "react-scroll";

export const DashDiv = styled.div`
  width: 100 %;
  min-height: 100px;
  background: radial-gradient(#9ba0ab 59%, #fff 59%);
  font-family: "Montserrat", sans-serif;
`;
export const DashNav = styled.nav`
    background: #14213D;
    width: 100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Montserrat", sans-serif;
  }
 `;
export const DashNavH2 = styled.h2`
  color: #fff;
  font-family: "Montserrat", sans-serif;
`;

export const DashButton = styled(Link)`
  background: #fff;
  padding: 14px 48px;
  border-radius: 50px;
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;
  justify-content: center;
  color: #14213d;
  font-family: "Montserrat", sans-serif;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ffb238;
    color: #fff;
  }
`;

/*export const SideNav = styled.nav`
  background-color: #060b26;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
`

export const MenuBarLink = styled(Link)` 
  margin-left: 2rem;
  font-size: 2rem;
  background: none;
`

export const nav-menu {
  background-color: #060b26;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 850ms;
}

.nav-menu.active {
  left: 0;
  transition: 350ms;
}

.nav-text {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  list-style: none;
  height: 60px;
}

.nav-text a {
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-radius: 4px;
}

.nav-text a:hover {
  background-color: #1a83ff;
}

.nav-menu-items {
  width: 100%;
}

.navbar-toggle {
  background-color: #060b26;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
}

span {
  margin-left: 16px;
}*/

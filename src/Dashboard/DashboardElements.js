import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const DashDiv = styled.div`
  width: 100 %;
  min-height: 100px;
  background: radial-gradient(#9ba0ab 59%, #fff 59%);
  font-family: "Montserrat", sans-serif;
`;
export const DashNav = styled.nav`
    background: #14213D;
    width: 100%;
    padding: 20px 40px;
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

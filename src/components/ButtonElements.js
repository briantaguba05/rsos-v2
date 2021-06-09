import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const Button = styled(LinkR)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#14213D" : "#fff")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#fff" : "#14213D")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-family: "Roboto Mono", monospace;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#9BA0AB" : "#9BA0AB")};
    color: ${({ dark }) => (dark ? "#14213D" : "#fff")};
  }
`;

export const Button2 = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#14213D" : "#fff")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#fff" : "#14213D")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-family: "Roboto Mono", monospace;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#9BA0AB" : "#9BA0AB")};
    color: ${({ dark }) => (dark ? "#14213D" : "#fff")};
  }
`;

import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const AboutContent = styled.div`
  background: #14213d;
  padding: 20px 30px;
  height: 500px;
  position: left;
  z-index: 1;
`;

export const AboutH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  padding: 10px 10px;
`;

export const AboutContentSec = styled.div`
  background: #fff;
  padding: 20 30px;
  height: 500px;
  position: left;
  z-index: 1;
`;

export const AboutH1Sec = styled.h1`
  color: #14213d;
  font-size: 48px;
  text-align: center;
  padding: 10px 10px;
`;

export const BackButton = styled(LinkR)`
  box-shadow: 0px 0px 0px 2px #9fb4f2;
  justify-content: center;
  background-color: #14213d;
  border-radius: 10px;
  border: 1px solid #4e6096;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  padding: 12px 37px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #283966;
  transition: all 0.2s ease-in-out;
  font-family: "Roboto Mono", monospace;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #14213d;
  }
`;

export const Filler = styled.div`
  height: 80px;
  color: fff;
`;

export const AboutP = styled.p`
  color: #fff;
  padding: 10px 10px;
`;

export const AboutPSec = styled.p`
  color: #14213d;
  padding: 10px 10px;
`;

export const AboutIMG = styled.img`
  height: 300px;
`;

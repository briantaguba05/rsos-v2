import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const AboutMain = styled.div`
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const AboutH1 = styled.h1`
  color: #14213d;
  font-size: 48px;
  text-align: center;
  padding: 10px 10px;
  font-family: "Raleway";
`;

export const AboutH1Sec = styled.h1`
  color: #14213d;
  font-size: 48px;
  text-align: center;
  padding: 10px 10px;
  font-family: "Raleway";
`;

export const Filler = styled.div`
  height: 80px;
  color: fff;
`;

export const AboutP = styled.p`
  text-align: justify;
  width: 80%;
  margin-left: 5px;
  padding-left: 8rem;
  font-family: "Raleway";
  font-size: 18px;
  letter-spacing: 1px;
  color: #14213d;
`;

export const TermsH2 = styled.h2`
  color: #14213d;
  font-size: 20px;
  text-align: center;
  padding: 10px 10px;
  font-weight: bold;
  font-family: "Raleway";
`;

export const TermsSiteP = styled.p`
  color: #14213d;
  font-size: 15px;
  font-weight: bold;
  font-family: "Raleway";
`;

export const BtnkLink = styled(LinkR)``;

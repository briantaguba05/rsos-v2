import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { Link as LinkS } from "react-scroll";
// eslint-disable-next-line no-unused-vars
const goodblue = "#2293D4";

export const TutorialsContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #14213d;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const TutorialsWrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /*add more 1fr if adding more column*/
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const TutorialsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1 px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const TutorialsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const TutorialsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  font-family: "Roboto Mono", monospace;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const TutorialsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  font-family: "Roboto Mono", monospace;
`;

export const TutorialsP = styled.p`
  font-size: 1rem;
  text-align: center;
  font-family: "Roboto Mono", monospace;
`;
export const TutorialsP2 = styled.p`
  font-size: 1rem;
  text-align: left;
  font-family: "Roboto Mono", monospace;
`;

export const TutLink = styled(LinkR)`
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 16px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
`;

export const TitleDiv = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 3rem;
  text-align: center;
  justify-content: center;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 100px;
  margin-top: 50px;
`;

export const ImageCont = styled.img`
  height: auto;
  max-width: 100%;
`;

export const UnivList = styled.ul`
  font-family: "Roboto Mono", monospace;
  text-align: center;
  padding: 15px;
`;

export const LocList = styled.li`
  font-family: "Roboto Mono", monospace;
  text-align: left;
  padding: 15px;
`;

export const TutorialsCard2 = styled.div`
  background: #fff3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 30px;
  padding-bottom: 30px;
  box-shadow: 0 1 px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
`;

export const TutorialsWrapper2 = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /*add more 1fr if adding more column*/
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

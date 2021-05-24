import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
const goodblue = "#2293D4";

export const TutorialsContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #d8c3a5;

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
  color: #e85a4f;
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

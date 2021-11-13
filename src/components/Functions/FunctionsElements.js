import styled from "styled-components";

export const FunctContent = styled.div`
  background: #14213d;
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 500px;
  z-index: 1;
  margin: auto;

  @media screen and (max width: 480px) {
    margin: auto;
    height: 800px;
  }
`;

export const FunctH1 = styled.h1`
  color: #fff;
  font-size: 40px;
  text-align: center;
  margin: auto;
  font-family: "Alegreya";

  @media screen and (max width: 480px) {
    font-size: 30px;
  }
`;

export const FunctContentSec = styled.div`
  background: #fff;
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 500px;
  z-index: 1;
  margin: auto;

  @media screen and (max width: 480px) {
    height: 800px;
  }
`;

export const FunctH1Sec = styled.h1`
  color: #14213d;
  font-size: 40px;
  text-align: center;
  margin: auto;
  font-family: "Alegreya";
  @media screen and (max width: 480px) {
    font-size: 30px;
  }
`;

export const FuncIMG = styled.img`
  height: 350px;
  width: 350px;
  margin: auto;

  @media screen and (max width: 480px) {
    height: 150px;
    width: 150px;
  }
`;

export const FunctP = styled.p`
  color: #fff;
  font-size: 20px;
  text-align: center;
  margin: auto;
  font-family: "Alegreya";
  @media screen and (max width: 480px) {
    font-size: 12px;
  }
`;

export const FunctPSec = styled.p`
  color: #14213d;
  font-size: 20px;
  text-align: center;
  margin: auto;
  font-family: "Alegreya";
  @media screen and (max width: 480px) {
    font-size: 12px;
  }
`;

export const FunctFiller = styled.div`
  height: 80px;
  margin: auto;
`;

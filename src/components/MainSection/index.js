import React, { useState } from "react";
import { Button } from "../ButtonElements";
import {
  MainContainer,
  MainContent,
  MainH1,
  MainP,
  MainBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./MainElements";

const MainSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const Title = "RSOS - HOME";
  return (
    <MainContainer id="home">
      <title>{Title}</title>

      <MainContent>
        <MainH1>RSOS™</MainH1>
        <MainP>Police And Riders Alliance Club</MainP>
        <MainBtnWrapper>
          <Button
            to="/signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </MainBtnWrapper>
      </MainContent>
    </MainContainer>
  );
};

export default MainSection;

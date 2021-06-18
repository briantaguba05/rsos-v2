import React, { useState } from "react";
import Video from "../../videos/starrysky.mp4";
import { Button } from "../ButtonElements";
import grouplogo from "../../images/beneflogo2.png";
import {
  MainContainer,
  MainBg,
  VideoBg,
  MainContent,
  MainH1,
  MainP,
  MainBtnWrapper,
  ArrowForward,
  ArrowRight,
  ImgLogo,
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
      <MainBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </MainBg>
      <MainContent>
        <ImgLogo src={grouplogo} alt="group-logo"></ImgLogo>
        <MainH1>RSOS™</MainH1>
        <MainP>Riding has never been scary before! Emergency-secured!</MainP>
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

import React, { useState } from "react";
import { Button } from "../ButtonElements";
import MainSection from "../MainSection";
import NavbarTwice from "../Navbar";
import ScrollToTop from "../ScrollToTop";
import {
  AboutContent,
  AboutContentSec,
  AboutH1,
  AboutH1Sec,
  BackButton,
  Filler,
  AboutP,
  AboutIMG,
  AboutPSec,
} from "./AboutElements";

const About = () => {
  const to = <MainSection />;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ScrollToTop />
      <NavbarTwice toggle={toggle} />
      <Filler />
      <AboutContent>
        <AboutH1>About The Team</AboutH1>
        <AboutP>P.A.R.A.C.</AboutP>
        <AboutIMG src="/beneflogo2.png" alt="image"></AboutIMG>
        <AboutIMG src="/beneflogo1.png" alt="image"></AboutIMG>
        <br></br>
        <br></br>
        <br></br>
      </AboutContent>
      {/*<BackButton to="/">GO BACK</BackButton>*/}
      <AboutContentSec>
        <AboutH1Sec>About The Developers</AboutH1Sec>
        <AboutIMG src="/NUSEAL.png" alt="image"></AboutIMG>
        <AboutPSec>National University Manila</AboutPSec>
      </AboutContentSec>
    </>
  );
};

export default About;

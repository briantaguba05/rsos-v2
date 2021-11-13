import React, { useState } from "react";
import NavbarTwice from "../Navbar";
import ScrollToTop from "../ScrollToTop";
import {
  AboutContent,
  AboutContentSec,
  AboutH1,
  AboutH1Sec,
  Filler,
  AboutP,
  AboutIMG,
  AboutPSec,
  SectionOne,
  AboutIMGSec,
  AboutPLarge,
  AboutPSecLarge,
  AboutPSecMed,
  SectionTwo,
  AboutMain,
} from "./AboutElements";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ScrollToTop />
      <NavbarTwice toggle={toggle} />
      <Filler />
      <AboutMain>
        <AboutContent>
          <AboutH1>About The Team</AboutH1>
          <AboutIMG src="/beneflogo2.png" alt="image"></AboutIMG>
          <AboutIMG src="/beneflogo1.png" alt="image"></AboutIMG>
          <AboutPLarge>P.A.R.A.C.</AboutPLarge>
          <br></br>
          <AboutP>
            Stands for, (Police And Riders Alliance Club), formed in 2015
          </AboutP>
          <AboutP>
            The group consists of members from various government agencies,{" "}
          </AboutP>
          <AboutP>like military, police, fireman, and other people.</AboutP>

          <br></br>
          <br></br>
          <br></br>
        </AboutContent>
        {/*<BackButton to="/">GO BACK</BackButton>*/}
        <AboutContentSec>
          <AboutH1Sec>About The Developers</AboutH1Sec>
          <SectionOne>
            <AboutIMGSec src="/NUSEAL.png" alt="image"></AboutIMGSec>
            <AboutPSecLarge>National University Manila</AboutPSecLarge>
          </SectionOne>
          <AboutPSec>BSIT-MWA Students</AboutPSec>
          <AboutPSec>Team HapLoss-B</AboutPSec>

          <SectionTwo>
            <br></br>
            <AboutPSecMed>Supervised By :</AboutPSecMed>
            <AboutPSec>Mr. Eliseo Ramirez</AboutPSec>
            <br></br>
            <AboutPSecMed>Built By:</AboutPSecMed>
            <AboutPSec>Mr. Junel L. Posio</AboutPSec>
            <AboutPSec>Mr. Brian Karl Taguba</AboutPSec>
            <AboutPSec>Mr. Cymon Mopera</AboutPSec>
            <AboutPSec>Mr. Schuck Carvajal</AboutPSec>
          </SectionTwo>
        </AboutContentSec>

        <AboutContent>
          <AboutH1>THIRD PANEL</AboutH1>
        </AboutContent>
      </AboutMain>
    </>
  );
};

export default About;

import React, { useState } from "react";
import { Button } from "react-scroll";
import { Button2 } from "../ButtonElements";
import MainSection from "../MainSection";
import Navbar from "../Navbar";
import NavbarTwice from "../Navbar/indexTwice";
import ScrollToTop from "../ScrollToTop";

const About = () => {
  const to = <MainSection />
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <h1> ABOUT PAGE</h1>
      <Button2 to="to"></Button2>
    </>
  );
};

export default About;

import React, { useState } from "react";
import { Button } from "../ButtonElements";
import MainSection from "../MainSection";
import NavbarTwice from "../Navbar";
import ScrollToTop from "../ScrollToTop";
import { FunctContent, FunctH1 } from "./FunctionsElements";

const Functions = () => {
  const to = <MainSection />;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ScrollToTop />
      <NavbarTwice toggle={toggle} />
      <FunctContent>
        <FunctH1>FUNCTIONS PAGE</FunctH1>
        <br></br>
        <br></br>
        <br></br>
        <Button to="/">GO BACK</Button>
      </FunctContent>
    </>
  );
};

export default Functions;

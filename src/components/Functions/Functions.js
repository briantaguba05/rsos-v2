import React, { useState } from "react";
import Navbar from "../Navbar";
import ScrollToTop from "../ScrollToTop";
import Sidebar from "../Sidebar";
import {
  FunctContent,
  FunctH1,
  FunctContentSec,
  FunctH1Sec,
  FuncIMG,
  FunctP,
  FunctFiller,
  FunctPSec,
} from "./FunctionsElements";
import FuncsDash from "../../images/functionsimg/app_map_dashboard.png";
import FuncsGas from "../../images/functionsimg/gas_nearby.png";
import FuncsGuide from "../../images/functionsimg/inapp_guides.png";
import FuncsNews from "../../images/functionsimg/inapp_news.png";
import FuncsWeather from "../../images/functionsimg/inapp_weather.png";
import FuncsEmergency from "../../images/functionsimg/emergency.png";
import FuncsReport from "../../images/functionsimg/report_button.png";

const Functions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <FunctFiller />
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <FunctContent>
        <FunctH1>Dashboard with built-in map</FunctH1>
        <FunctP>
          View the location of your choice with the in-app built in google map.
        </FunctP>
        <FuncIMG src={FuncsDash} />
      </FunctContent>

      <FunctContentSec>
        <FunctH1Sec>Nearby Gas Location</FunctH1Sec>
        <FunctPSec>
          Find the nearest gas on your location, especially helps when not
          familiar with the road!
        </FunctPSec>
        <FuncIMG src={FuncsGas} />
      </FunctContentSec>

      <FunctContent>
        <FunctH1>Motorcycle Guidelines on the go!</FunctH1>
        <FunctP>
          Review First Aid, Motorcycle Hand Signs, and Motorcycle Safety
          Techniques on your mobile! Anywhere and Everywhere.
        </FunctP>
        <FuncIMG src={FuncsGuide} />
      </FunctContent>

      <FunctContentSec>
        <FunctH1Sec>NEWS - North South East West</FunctH1Sec>
        <FunctPSec>
          Check on the latest NEWS, head over to our in-app NEWS page and keep
          updated!
        </FunctPSec>
        <FuncIMG src={FuncsNews} />
      </FunctContentSec>

      <FunctContent>
        <FunctH1>Weather Feature</FunctH1>
        <FunctP>
          No more worries on your ride, check the weather on your destination,
          or on the roads that you will pass-by.
        </FunctP>
        <FuncIMG src={FuncsWeather} />
      </FunctContent>

      <FunctContentSec>
        <FunctH1Sec>Emergency Button</FunctH1Sec>
        <FunctPSec>
          Been in an accident? Notify your contacts that you need an assistance,
          With just one-click, they will get a notification that you are in need
          of help!
        </FunctPSec>
        <FuncIMG src={FuncsEmergency} />
        <FuncIMG src={FuncsReport} />
      </FunctContentSec>
    </>
  );
};

export default Functions;

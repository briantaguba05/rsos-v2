import React from "react";
import { Filler } from "../About/AboutElements";
import Navbar from "../Navbar";
import ScrollToTop from "../ScrollToTop";
import {
  ImageCont,
  UnivList,
  TitleDiv,
  TutorialsCard2,
  TutorialsH2,
  TutorialsP2,
} from "./TutorialsElements";
import technique from "../../images/technique.jpg";

const techniques = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Filler />
      <TitleDiv>
        Motorcycle Techniques
        <br></br>
        <ImageCont
          height="512px"
          width="512px"
          src={technique}
          alt={technique}
          required
        />
        <TutorialsH2>
          Riding a motorcycle is adventurous and an exhilarating experience.
          However, the harsh reality is that motorcycle riding can be very
          dangerous if proper precautions are not taken.
        </TutorialsH2>
      </TitleDiv>
      <hr></hr>
      <TutorialsCard2>
        <UnivList>
          <TutorialsH2>#1. Take a safety course.</TutorialsH2>
          <TutorialsP2>
            A safety course will teach you the rules of the road for
            motorcycles. You will also learn the appropriate actions to take in
            unpredictable riding situations that can arise. Driving a motorcycle
            requires skill and good judgment and a safety course can help you
            practice these.
          </TutorialsP2>
        </UnivList>

        <UnivList>
          <TutorialsH2>#2. Check the weather before heading out.</TutorialsH2>
          <TutorialsP2>
            Rain, ice and snow can compromise your ride. Driving in these
            elements is hazardous for bikers because you have less traction than
            a car and visibility is lower. Choose a different day if inclement
            weather is in the forecast.
          </TutorialsP2>
        </UnivList>

        <UnivList>
          <TutorialsH2>#3. Wear motorcycle gear.</TutorialsH2>
          <TutorialsP2>
            Motorcycle gear protects you from the elements, debris and road
            rash. Appropriate gear includes a DOT-approved helmet, goggles,
            leather jacket, leather pants or chaps, over the ankle boots and
            non-slip gloves. Dress in layers to adjust to any changing weather
            throughout the day.
          </TutorialsP2>
        </UnivList>

        <UnivList>
          <TutorialsH2>
            #4. Inspect your motorcycle before each ride.
          </TutorialsH2>
          <TutorialsP2>
            It’s a good idea to inspect your bike before you ride to ensure it
            is as safe as possible. Check your headlights, taillights, turn
            signals, brakes, fuel, oil, tire pressure, mirrors, handlebars and
            horn.
          </TutorialsP2>
        </UnivList>

        <UnivList>
          <TutorialsH2>
            #5. Obey traffic rules, use your signals and drive the speed limit.
          </TutorialsH2>
          <TutorialsP2>
            This may sound remedial, but it’s important to follow traffic rules,
            use signals and drive the posted speed limit to avoid accidents.
            According to the Insurance Institute for Highway Safety, in 2009 48%
            of motorcyclist deaths were caused by excessive speed.
          </TutorialsP2>
        </UnivList>

        <UnivList>
          <TutorialsH2>#6. Be visible.</TutorialsH2>
          <TutorialsP2>
            You cannot assume you are visible to other drivers. According to The
            Hurt Report published by the U.S. Department of Transportation’s
            National Highway Traffic and Safety Administration in 1981, 75% of
            accidents involving motorcycles are due to the fact that other
            drivers did not see the motorcycle. Here are some ways to remain
            visible: Avoid other drivers’ blind spots; Drive with your
            headlights on even during the day; Wear reflective or bright
            clothing, and; always use your turn signals and hand signals.
          </TutorialsP2>
        </UnivList>

        <UnivList>
          <TutorialsH2>
            #7. Be observant and watch for road hazards.
          </TutorialsH2>
          <TutorialsP2>
            Driving defensively enables you to anticipate traffic problems and
            road hazards. Sand, oil and gravel can make you lose traction. Bumps
            and potholes are equally dangerous and should also be avoided. Cross
            railroad tracks at the appropriate angle.
          </TutorialsP2>
        </UnivList>

        <UnivList>
          <TutorialsH2>#8. Stay at a safe distance.</TutorialsH2>
          <TutorialsP2>
            Tailgating is not safe. It is recommended to stay at least four
            seconds away from the vehicle in front of you. This will allow you
            to stop in an emergency situation. Also, it is good to have an
            escape route in mind such as moving to the shoulder should you not
            be able to stop in time.
          </TutorialsP2>
        </UnivList>

        <UnivList>
          <TutorialsH2>#9. Carry a first-aid kit.</TutorialsH2>
          <TutorialsP2>
            Keeping a basic first-aid kit with your motorcycle is a good idea in
            case of injury. It should include: disinfecting wipes, bandages,
            hand sanitizer, gauze, adhesive tape and Band-Aids.
          </TutorialsP2>
        </UnivList>

        <UnivList>
          <TutorialsH2>#10. Take an advanced riding course.</TutorialsH2>
          <TutorialsP2>
            Practice and increase your skills by taking an advanced riding
            course. You will learn collision avoidance maneuvers, advanced
            turning, control tips and braking techniques.
          </TutorialsP2>
        </UnivList>
      </TutorialsCard2>
    </>
  );
};

export default techniques;

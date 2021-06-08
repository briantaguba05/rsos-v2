import React from "react";
import ScrollToTop from "../ScrollToTop";
import Navbar from "../Navbar";
import Footer from "../Footer";
import {
  ImageCont,
  LocList,
  TitleDiv,
  TutorialsCard2,
  TutorialsH2,
  TutorialsIcon,
  TutorialsP2,
  TutorialsWrapper2,
  UnivList,
} from "./TutorialsElements";
import imageHand from "../../images/motorcycleTut.png";
import hand1 from "../../images/hand1.png";
import hand2 from "../../images/hand2.png";
import hand3 from "../../images/hand3.png";
import hand4 from "../../images/hand4.png";
import hand5 from "../../images/hand5.png";
import hand6 from "../../images/hand6.png";
import hand7 from "../../images/hand7.png";
import hand8 from "../../images/hand8.png";
import hand9 from "../../images/hand9.png";
import hand10 from "../../images/hand10.png";
import hand11 from "../../images/hand11.png";
import hand12 from "../../images/hand12.png";
import hand13 from "../../images/hand13.png";
import hand14 from "../../images/hand14.png";
import hand15 from "../../images/hand15.png";
import hand16 from "../../images/hand16.png";

const handguide = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <TitleDiv>
        Motorcycle Hand Guides
        <br></br>
        <ImageCont src={imageHand} alt="firstaid" required />
        <TutorialsH2>
          Communication between the riding group is essential at all times.
          Using hand signals can greatly boost their communication thus reducing
          confusion and conflict.
        </TutorialsH2>
      </TitleDiv>
      <hr></hr>
      <TutorialsWrapper2>
        <TutorialsCard2>
          <UnivList>
            <LocList>
              <TutorialsH2>LEFT TURN</TutorialsH2>
              <TutorialsIcon src={hand1} />
              <TutorialsP2>
                For letting the group know you are turning left. The signal can
                be used to break from or to lead the group, depending on whether
                you are leading or following. Make the signal by extending your
                left arm straight out with your palm facing down.
              </TutorialsP2>
            </LocList>

            <LocList>
              <TutorialsH2>RIGHT TURN</TutorialsH2>
              <TutorialsIcon src={hand2} />
              <TutorialsP2>
                Let the group know you are turning right. Use this signal to
                lead or to break from the group, depending on your status in the
                group (leading or following). Bend your elbow 90 degrees, then
                point your clenched fist at the sky to complete the signal.
              </TutorialsP2>
            </LocList>

            <LocList>
              <TutorialsH2>STOP</TutorialsH2>
              <TutorialsIcon src={hand3} />
              <TutorialsP2>
                When the leader of the group makes the “stop” signal, it should
                cause a chain reaction going all the way back to the last rider
                in the group. Make the signal by bending your arm 90 degrees,
                keeping your palm open, and pointing your fingers down at the
                road.
              </TutorialsP2>
            </LocList>

            <LocList>
              <TutorialsH2>SPEED UP</TutorialsH2>
              <TutorialsIcon src={hand4} />
              <TutorialsP2>
                Inexperienced groups will benefit most from this signal.
                Experienced groups rely more on body language. Use it to tell
                the rest of the group to match your pace by increasing their
                speed. Extend your arm and swing your palm in an upward
                direction to give the signal.
              </TutorialsP2>
            </LocList>

            <LocList>
              <TutorialsH2>SLOW DOWN</TutorialsH2>
              <TutorialsIcon src={hand5} />
              <TutorialsP2>
                This signal is useful because motorcycles generate intense
                engine-braking forces, which do not activate the rear-facing
                brake light. Extend your arm and swing your palm down toward the
                road to tell everyone in the group to slow down.
              </TutorialsP2>
            </LocList>

            <LocList>
              <TutorialsH2>You Lead/Come!</TutorialsH2>
              <TutorialsIcon src={hand7} />
              <TutorialsP2>
                AKA the “YOU! Follow me!” signal. It has 2 distinct parts. Start
                by pulling up alongside the rider you want to follow or lead. In
                one motion, point to their bike and then swing your arm forward.
                Repeat this motion until the other rider understands.
              </TutorialsP2>
            </LocList>

            <LocList>
              <TutorialsH2>ROAD HAZARD</TutorialsH2>
              <TutorialsIcon src={hand8} />
              <TutorialsP2>
                This is a “2 in 1” signal. The signal is different depending on
                whether the hazard is to the right or the left. If the hazard is
                on the left, point with your left arm. Point with your right
                foot if the hazard is on the right.
              </TutorialsP2>
            </LocList>

            <LocList>
              <TutorialsH2>SINGLE FILE</TutorialsH2>
              <TutorialsIcon src={hand9} />
              <TutorialsP2>
                An easy gesture. Extend your left index finger and bend your arm
                up to the sky. In other words, pretend the riders behind you are
                asking “How many?” and then indicate the answer by gesturing
                with your left pointer finger.
              </TutorialsP2>
            </LocList>

            <LocList>
              <TutorialsH2>DOUBLE FILE</TutorialsH2>
              <TutorialsIcon src={hand10} />
              <TutorialsP2>
                Bend your left arm at the elbow and point to the sky with your
                index and middle fingers. Do not forget to include your index
                finger.
              </TutorialsP2>
            </LocList>

            <LocList>
              <TutorialsH2>COMFORT STOP</TutorialsH2>
              <TutorialsIcon src={hand11} />
              <TutorialsP2>
                Poke your arm out to the left and shake your fist using short,
                up-and-down movements – as though shaking a can of paint. Make
                this stop only when the road or shoulder is debris-free and
                there is ample room to pull over.
              </TutorialsP2>
            </LocList>

            <LocList>
              <TutorialsH2>REFRESHMENT STOP</TutorialsH2>
              <TutorialsIcon src={hand12} />
              <TutorialsP2>
                Indicate your intention to stop at a gas station or restaurant.
                Make a “thumbs up” with your left hand and gesture toward your
                mouth (or the front of your helmet) as though your thumb is a
                straw poking up out of a glass of water.
              </TutorialsP2>
            </LocList>

            <LocList>
              <TutorialsH2>TURN SIGNAL ON</TutorialsH2>
              <TutorialsIcon src={hand13} />
              <TutorialsP2>
                To make a “blinking” gesture using your left hand, alternate
                between extending your fingers and making a fist. Use this
                signal to let another rider know he left his blinker on,
                allowing him to save face during the next comfort or refreshment
                stop.
              </TutorialsP2>
            </LocList>

            <LocList>
              <TutorialsH2>PULL OFF</TutorialsH2>
              <TutorialsIcon src={hand14} />
              <TutorialsP2>
                Indicate to the rest of the group to pull off of the highway,
                either immediately or at the next exit. The pull off signal is
                given when the reason for the stop is something other than a
                comfort or refreshment stop.
              </TutorialsP2>
            </LocList>

            <LocList>
              <TutorialsH2>COPS AHEAD</TutorialsH2>
              <TutorialsIcon src={hand15} />
              <TutorialsP2>
                Let your fellow riders know about police activity up the road by
                patting the top of your helmet with your left palm. Keep our
                communities’ police officers and other first responders safe.
                Use caution and respect all laws when riding your motorcycle.
              </TutorialsP2>
            </LocList>

            <LocList>
              <TutorialsH2>FUEL</TutorialsH2>
              <TutorialsIcon src={hand16} />
              <TutorialsP2>
                When riding with most groups, running out of gas will earn you a
                nickname you probably won’t like. Communicate your need to
                refuel by pointing to your fuel tank using your left index
                finger.
              </TutorialsP2>
            </LocList>

            <LocList>
              <TutorialsH2>FOLLOW ME</TutorialsH2>
              <TutorialsIcon src={hand6} />
              <TutorialsP2>
                Used to announce a new, often self-appointed group leader. Also
                used to segment a large group into a smaller group. Make the
                signal by extending your arm forward at the shoulder with your
                palm facing outward.
              </TutorialsP2>
            </LocList>
          </UnivList>
        </TutorialsCard2>
      </TutorialsWrapper2>
      <Footer />
    </>
  );
};

export default handguide;

import React from "react";
import {
  ImageCont,
  LocList,
  TitleDiv,
  TutorialsCard2,
  TutorialsH2,
  TutorialsIcon,
  TutorialsP,
  UnivList,
} from "./TutorialsElements";
import imageAid from "../../images/firstaid.png";
import f1Cpr from "../../images/f1.cpr.png";
import f2Bleed from "../../images/f2.bleeding.png";
import f3Choke from "../../images/f3.choke.png";
import f4Burns from "../../images/f4.burns.png";
import f5Blister from "../../images/f5.blister.png";
import f6Fracture from "../../images/f6.fracture.png";
import f7Sprain from "../../images/f7.sprain.png";
import f8Nosebleed from "../../images/f8.nosebleed.png";
import f9Freeze from "../../images/f9.freeze.png";
import f10Poison from "../../images/f10.poison.png";
import ScrollToTop from "../ScrollToTop";
import Navbar from "../Navbar";
import Footer from "../Footer";

const firstaid = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <TitleDiv>
        First Aid Guides
        <br></br>
        <ImageCont src={imageAid} alt="firstaid" required />
        <TutorialsH2>
          Accidents can happen anytime and anywhere, as motorcycle riders, we
          are always prone to such cautions. It is better for the riders to know
          proper first-aid as this can ensure additional safety and can lessen
          risk
        </TutorialsH2>
      </TitleDiv>
      <hr></hr>

      <TutorialsCard2>
        <TutorialsIcon src={f1Cpr} />
        <TutorialsH2>1. CPR (Cardiopulmonary Resuscitation)</TutorialsH2>
        <br></br>
        <TutorialsP>When you suspect someone is in cardiac arrest:</TutorialsP>
        <UnivList>
          <LocList>
            1. Get someone to call 911 or the medical alert system for your
            location.
          </LocList>
          <LocList>
            2. Start chest compressions immediately. Push down hard and fast in
            the center of the chest, allowing the chest to come back up
            naturally between compressions. Continue until someone with more
            training has arrived.
          </LocList>
          <LocList>
            3. If you're trained in CPR, use chest compressions and rescue
            breathing.
          </LocList>
          <LocList>
            4. Use an AED if one is available. It's important to not delay chest
            compressions, though, so have someone else find one while you do
            chest compressions.
          </LocList>
        </UnivList>
      </TutorialsCard2>

      <TutorialsCard2>
        <TutorialsIcon src={f2Bleed} />
        <TutorialsH2>2. Bleeding</TutorialsH2>
        <br></br>
        <TutorialsP>If you're faced with bleeding:</TutorialsP>
        <UnivList>
          <LocList>1. Rinse the wound with water if possible.</LocList>
          <LocList>
            2. Cover the wound with a gauze or cloth (towel, blanket, clothing,
            whatever's available).
          </LocList>
          <LocList>
            3. Apply direct pressure to stop the blood flow and encourage
            clotting.
          </LocList>
          <LocList>
            4. If possible, elevate the bleeding body part above the heart.
          </LocList>
          <LocList>
            5. Don't remove the cloth if it becomes soaked through, but add more
            layers if needed. Removing the first layer will interfere with the
            clotting process and result in more blood loss.
          </LocList>
          <LocList>6. Once bleeding is stopped, apply a clean bandage.</LocList>
        </UnivList>
      </TutorialsCard2>

      <TutorialsCard2>
        <TutorialsIcon src={f3Choke} />
        <TutorialsH2>3. Choking</TutorialsH2>
        <br></br>
        <TutorialsP>
          If you're faced with choking, perform the Heimlich maneuver:
        </TutorialsP>
        <UnivList>
          <LocList>
            1. Stand behind the person and lean them slightly forward
          </LocList>
          <LocList>2. Put your arms around their waist</LocList>
          <LocList>
            3. Clench a fist and place it between their navel and rib cage
          </LocList>
          <LocList>4. Grab your fist with your other hand</LocList>
          <LocList>
            5. Pull the clenched fist sharply backward and upward under their
            rib cage in 5 quick thrusts. Repeat until the object is coughed up.
          </LocList>
        </UnivList>
      </TutorialsCard2>

      <TutorialsCard2>
        <TutorialsIcon src={f4Burns} />
        <TutorialsH2>4. Burns</TutorialsH2>
        <br></br>
        <TutorialsP>Take these first aid burns steps:</TutorialsP>
        <UnivList>
          <LocList>
            1. Flush the burned area with cool running water for several
            minutes. Do not use ice.
          </LocList>
          <LocList>2. Apply a light gauze bandage.</LocList>
          <LocList>
            3. Take ibuprofen or acetaminophen for pain relief if necessary.
          </LocList>
          <LocList>4. Do not break any blisters that may have formed.</LocList>
          <LocList>
            <strong>
              *Do not apply ointments, butter, or oily remedies to a burn.*
            </strong>
          </LocList>
        </UnivList>
      </TutorialsCard2>

      <TutorialsCard2>
        <TutorialsIcon src={f5Blister} />
        <TutorialsH2>5. Blisters</TutorialsH2>
        <br></br>
        <TutorialsP>First Aid for Blisters:</TutorialsP>
        <UnivList>
          <LocList>
            1. Wash your hands and sterilize a needle with alcohol.
          </LocList>
          <LocList>2. Make small punctures at the edge of the blisters</LocList>
          <LocList>3. Gently push the fluid out.</LocList>
          <LocList>4. Apply antibiotic ointment.</LocList>
          <LocList>5. Bandage it.</LocList>
          <LocList>
            6. If possible, take steps to protect the area from further rubbing
            or pressure.
          </LocList>
        </UnivList>
      </TutorialsCard2>

      <TutorialsCard2>
        <TutorialsIcon src={f6Fracture} />
        <TutorialsH2>6. Fractures</TutorialsH2>
        <br></br>
        <TutorialsP>First Aid for a suspected fracture:</TutorialsP>
        <UnivList>
          <LocList>1. Don't try to straighten it.</LocList>
          <LocList>
            2. For a limb, use a splint and padding to immobilize it.
          </LocList>
          <LocList>
            3. Put a cold pack on the injury, with a barrier between it and the
            skin to prevent tissue damage. If ice is all that's available, put
            it in a plastic bag and wrap it in a shirt or towel.
          </LocList>
          <LocList>4. If it's an extremity, elevate it.</LocList>
          <LocList>
            5. Give anti-inflammatory drugs like Advil (ibuprofen) or Flanax
            (naproxen) for pain.
          </LocList>
        </UnivList>
      </TutorialsCard2>

      <TutorialsCard2>
        <TutorialsIcon src={f7Sprain} />
        <TutorialsH2>7. Sprain</TutorialsH2>
        <br></br>
        <TutorialsP>For a suspected sprain:</TutorialsP>
        <UnivList>
          <LocList>1. Immobilize the limb.</LocList>
          <LocList>2. Apply a cold pack.</LocList>
          <LocList>
            3. Elevate the injured part if you can do so safely.
          </LocList>
          <LocList>
            4. Give anti-inflammatory drugs like Advil (ibuprofen) or Flanax
            (naproxen) for pain.
          </LocList>
        </UnivList>
      </TutorialsCard2>

      <TutorialsCard2>
        <TutorialsIcon src={f8Nosebleed} />
        <TutorialsH2>8. Nosebleed</TutorialsH2>
        <br></br>
        <TutorialsP>The First Aid For Nosebleed Includes:</TutorialsP>
        <UnivList>
          <LocList>1. Lean slightly forward, not back.</LocList>
          <LocList>
            2. Pinch the nose just below the bridge, high enough that the
            nostrils aren't pinched closed.
          </LocList>
          <LocList>
            3. Check after five minutes to see if bleeding has stopped. If not,
            continue pinching and check after another 10 minutes.
          </LocList>
          <LocList>
            4. You can also apply a cold pack to the bridge of the nose while
            pinching.
          </LocList>
        </UnivList>
      </TutorialsCard2>

      <TutorialsCard2>
        <TutorialsIcon src={f9Freeze} />
        <TutorialsH2>9. Frostbite or Chills</TutorialsH2>
        <br></br>
        <TutorialsP>
          Treating frostbite is a delicate procedure of gradual warming. If at
          all possible, this should be done by professionals at a medical
          facility. If that's not possible, or while awaiting an ambulance, you
          can begin first aid:
        </TutorialsP>
        <UnivList>
          <LocList>1. Get out of the cold.</LocList>
          <LocList>
            2. Immerse the affected area in warm water (36°C to 40°C) for 20 to
            30 minutes.
          </LocList>
          <LocList>3. Do not rub the affected area.</LocList>
          <LocList>
            4. Do not use sources of dry heat (like a heating pad or fire air).
          </LocList>
          <LocList>
            5. For fingers and toes: After they're warm, put clean cotton balls
            between them.
          </LocList>
          <LocList>6. Loosely wrap the area with bandages.</LocList>
          <LocList>7. Use Ibuprofen for pain.</LocList>
          <LocList>8. Get medical attention as soon as possible.</LocList>
        </UnivList>
      </TutorialsCard2>

      <TutorialsCard2>
        <TutorialsIcon src={f10Poison} />
        <TutorialsH2>10. Poison</TutorialsH2>
        <br></br>
        <TutorialsP>Take the following actions until help arrives:</TutorialsP>
        <UnivList>
          <LocList>
            1. Swallowed poison = Remove anything remaining in the person's
            mouth. If the suspected poison is a household cleaner or other
            chemical, read the container's label and follow instructions for
            accidental poisoning.
          </LocList>
          <LocList>
            2. Poison on the skin = Remove any contaminated clothing using
            gloves. Rinse the skin for 15 to 20 minutes in a shower or with a
            hose.
          </LocList>
          <LocList>
            3. Poison in the eye = Gently flush the eye with cool or lukewarm
            water for 20 minutes or until help arrives.
          </LocList>
          <LocList>
            4. Inhaled poison = Get the person into fresh air as soon as
            possible.
          </LocList>
        </UnivList>
      </TutorialsCard2>
      <Footer />
    </>
  );
};

export default firstaid;

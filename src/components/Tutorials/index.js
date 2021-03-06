import React from "react";
import {
  TutorialsContainer,
  TutorialsH1,
  TutorialsH2,
  TutorialsCard,
  TutorialsWrapper,
  TutorialsIcon,
  TutorialsP,
  TutLink,
} from "./TutorialsElements";
import Icon1 from "../../images/undMedicine.svg";
import Icon2 from "../../images/undTeach1.svg";
import Icon3 from "../../images/undTeach2.svg";

const Tutorials = () => {
  return (
    <TutorialsContainer id="tutorials">
      <TutorialsH1>Safety Guidelines</TutorialsH1>
      <TutorialsWrapper>
        <TutorialsCard>
          <TutLink to="/firstaid">
            <TutorialsIcon src={Icon1} />
          </TutLink>
          <TutorialsH2>First Aid Guides</TutorialsH2>
          <TutorialsP>Learn basic first aid for your trip</TutorialsP>
        </TutorialsCard>

        <TutorialsCard>
          <TutLink to="/handguide">
            <TutorialsIcon src={Icon2} />
          </TutLink>
          <TutorialsH2>Motorcycle Hand Signs</TutorialsH2>
          <TutorialsP>
            Learn proper hand signs to help communicate with other riders!
          </TutorialsP>
        </TutorialsCard>

        <TutorialsCard path="/techniques">
          <TutLink to="/techniques">
            <TutorialsIcon src={Icon3} />
          </TutLink>
          <TutorialsH2>Motorcycle Safety Techniques</TutorialsH2>
          <TutorialsP>
            Learn techniques to aware yourself of what is the most efficient way
            of riding!
          </TutorialsP>
        </TutorialsCard>
      </TutorialsWrapper>
    </TutorialsContainer>
  );
};

export default Tutorials;

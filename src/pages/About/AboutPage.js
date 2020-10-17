import React from "react";
import IntroSection from "../../components/IntroSection/IntroSection";
import ParagraphWithTitle from "../../components/ContentSection/ParagraphWithTitle";
import TeamSection from "../../components/TeamSection/TeamSection";

const AboutPage = () => {
  return (
    <>
      <IntroSection content={"about"} />
      <ParagraphWithTitle id="movement" content={"about.movement"}></ParagraphWithTitle>
      <ParagraphWithTitle id="foundation" content={"about.foundation"}></ParagraphWithTitle>
      <TeamSection />
    </>
  );
};

export default AboutPage;

import React from "react";
import IntroSection from "../../components/IntroSection/IntroSection";
import ParagraphWithTitle from "../../components/ContentSection/ParagraphWithTitle";

const AboutPage = () => {
  return (
    <>
      <IntroSection content={"about"} />
      <ParagraphWithTitle content={"about.movement"}></ParagraphWithTitle>
      <ParagraphWithTitle content={"about.foundation"}></ParagraphWithTitle>
      <p>TEAM</p>
    </>
  );
};

export default AboutPage;

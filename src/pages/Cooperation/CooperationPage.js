import React from "react";
import IntroSection from "../../components/IntroSection/IntroSection";
import ContentPreviewSection from "../../components/ContentPreviewSection/ContentPreviewSection";

const content = {
  label: "O NAS",
  heading: "Czym jest Efektywny Altruizm?",
  text:
    "Efektywny Altruizm to pytanie o to, jak przynieść światu najwięcej dobra. To międzynarodowa społeczność, której to pytanie spędza sen z powiek i miesza w życiowych planach. Budujemy nowe organizacje dobroczynne i zasilamy te istniejące. Prowadzimy projekty badawcze i wykłady popularyzatorskie.",
  cta: "dowiedz się więcej",
  imgAlt: "test",
};

const CooperationPage = () => {
  return (
    <>
      <IntroSection content={"foundation"} />
      <ContentPreviewSection content={content} />
    </>
  );
};

export default CooperationPage;

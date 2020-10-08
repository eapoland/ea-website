import React from "react";
import IntroSection from "../../components/IntroSection/IntroSection";
import QuoteSection from "../../components/QuoteSection/QuoteSection";
import ContentPreviewSection from "../../components/ContentPreviewSection/ContentPreviewSection";
import NewsletterCtaSection from "../../components/NewsletterCtaSection/NewsletterCtaSection";
import SocialSection from "../../components/SocialSection/SocialSection";
import RecommendedSlider from "../../components/RecommendedSlider/RecommendedSlider";
import photo from "../../assets/images/test-photo.jpg";

const content = [
  {
    label: "O NAS",
    heading: "Czym jest Efektywny Altruizm?",
    text:
      "Efektywny Altruizm to pytanie o to, jak przynieść światu najwięcej dobra. To międzynarodowa społeczność, której to pytanie spędza sen z powiek i miesza w życiowych planach. Budujemy nowe organizacje dobroczynne i zasilamy te istniejące. Prowadzimy projekty badawcze i wykłady popularyzatorskie.",
    cta: "dowiedz się więcej",
    img: photo,
    imgAlt: "test",
  },
  {
    label: "O NAS",
    heading: "Jak działamy w Polsce?",
    text:
      "W Polsce szkolimy z podstaw i dobrych praktyk dobroczynności. W trakcie naszych spotkań szukamy odpowiedzi na trudne pytania. Przyglądamy się problemom filozoficznym, naukowym, jak i praktycznym aspektom czynienia dobra. Łączymy ludzi i organizacje. Tym pierwszym doradzamy w wyborze priorytetów w zgodzie z ich wartościami. Tym drugim pomagamy w maksymalizacji ich korzystnego wpływu.",
    cta: "dowiedz się więcej",
    img: photo,
    imgAlt: "test",
  },
];

const HomePage = () => {
  return (
    <>
      <IntroSection content={"welcome"} withButton />
      <QuoteSection />
      <ContentPreviewSection content={content[0]} />
      <ContentPreviewSection reversed content={content[1]} />
      <RecommendedSlider />
      <NewsletterCtaSection />
      <SocialSection />
    </>
  );
};

export default HomePage;

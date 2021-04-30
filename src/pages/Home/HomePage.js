import React from "react"
import QuoteSection from "../../components/QuoteSection/QuoteSection"
import ContentPreviewSection from "../../components/ContentPreviewSection/ContentPreviewSection"
import FriendlyOrganisationsSection from "../../components/FriendlyOrganisationsSection/FriendlyOrganisationsSection"
import photo from "../../assets/images/test-photo.jpg"
import photo2 from "../../assets/images/preview2.png"
import MainSlider from "../../components/MainSlider/MainSlider"
import ScrollToTop from "../../components/ScrollToTop"

const content = [
  {
    label: "O NAS",
    heading: "Czym jest Efektywny Altruizm?",
    text:
      "Efektywny Altruizm to pytanie o to, jak przynieść światu najwięcej dobra. To międzynarodowa społeczność, której to pytanie spędza sen z powiek i miesza w życiowych planach. Budujemy nowe organizacje dobroczynne i zasilamy te istniejące. Prowadzimy projekty badawcze i wykłady popularyzatorskie.",
    cta: "czytaj więcej",
    img: photo,
    imgAlt: "test",
    page: "about",
  },
  {
    label: "O NAS",
    heading: "Jak działamy w Polsce?",
    text:
      "W Polsce szkolimy z podstaw i dobrych praktyk dobroczynności. W trakcie naszych spotkań szukamy odpowiedzi na trudne pytania. Przyglądamy się problemom filozoficznym, naukowym, jak i praktycznym aspektom czynienia dobra. Łączymy ludzi i organizacje. Tym pierwszym doradzamy w wyborze priorytetów w zgodzie z ich wartościami. Tym drugim pomagamy w maksymalizacji ich korzystnego wpływu.",
    cta: "czytaj więcej",
    img: photo2,
    imgAlt: "test",
    page: "activities",
  },
]

const HomePage = () => {
  return (
    <>
      <ScrollToTop />
      <MainSlider />
      <QuoteSection />
      <ContentPreviewSection content={content[0]} />
      <ContentPreviewSection reversed content={content[1]} />
      <FriendlyOrganisationsSection />
    </>
  )
}

export default HomePage

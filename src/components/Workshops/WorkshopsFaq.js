import React from "react";
import FaqItem from "./FaqItem";
import "./Workshops.scss";

const items = [
  {
    title: "Czy istnieje możliwość przygotowania indywidualnego szkolenia?",
    content:
      "Chętnie o tym porozmawiamy. Napisz proszę maila na adres <a href='mailto:marcin.tischner@efektywnyaltruizm.org'>marcin.tischner@efektywnyaltruizm.org</a> i opisz jakie masz oczekiwania wobec szkolenia/warsztatu. Wkrótce wrócimy z odpowiedzią."
  },
  {
    title: "Czy możliwe jest przeprowadzenie warsztatów online?",
    content:
      "Oczywiście. Zarówno nasze warsztaty jak i szkolenia są dostosowane do formy online.",
  },
];

const WorkshopsFaq = () => {
  return (
    <div className="workshops-faq">
      <h3>FAQ - Pytania i odpowiedzi</h3>
      {items.map((item) => (
        <FaqItem item={item} key={item.title} />
      ))}
    </div>
  );
};

export default WorkshopsFaq;

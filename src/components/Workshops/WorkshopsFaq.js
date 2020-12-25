import React from "react";
import FaqItem from "./FaqItem";
import "./Workshops.scss";

const items = [
  {
    title: "Czy istnieje możliwość przygotowania indywidualnego szkolenia?",
    content:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
  },
  {
    title: "Jak wygląda polityka zwrotów?",
    content:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
  },
  {
    title: "Czy możliwe jest przeprowadzenie warsztatów online?",
    content:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
  },
];

const WorkshopsFaq = () => {
  return (
    <div className="workshops-faq">
      <h1>FAQ - Pytania i odpowiedzi</h1>
      {items.map((item) => (
        <FaqItem item={item} key={item.title} />
      ))}
    </div>
  );
};

export default WorkshopsFaq;

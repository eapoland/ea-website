import React from "react";
import Row from "reactstrap/lib/Row";
import WorkshopCard from "./WorkshopCard";
import "./Workshops.scss";

const workshops = [
  {
    title: "Warsztaty dla organizacji, które chcą robić najwięcej dobra",
    summary:
      "W Polsce szkolimy z podstaw i dobrych praktyk dobroczynności. W trakcie naszych spotkań szukamy odpowiedzi na trudne pytania.",
  },
  {
    title: "Warsztaty z ocalania świata. O globalnych ryzykach katastroficznych",
    summary:
      "W Polsce szkolimy z podstaw i dobrych praktyk dobroczynności. W trakcie naszych spotkań szukamy odpowiedzi na trudne pytania.",
  },
  {
    title: "Które organizacje wspierać? Dlaczego?",
    summary:
      "W Polsce szkolimy z podstaw i dobrych praktyk dobroczynności. W trakcie naszych spotkań szukamy odpowiedzi na trudne pytania. W Polsce szkolimy z podstaw i dobrych praktyk dobroczynności. W trakcie naszych spotkań szukamy odpowiedzi na trudne pytania.",
  },
  {
    title: "Warsztaty dla altruistów z opieki nad samym sobą",
    summary:
      "W Polsce szkolimy z podstaw i dobrych praktyk dobroczynności. W trakcie naszych spotkań szukamy odpowiedzi na trudne pytania.",
  },
];

const WorkshopList = () => {
  return (
    <Row className="justify-content-center workshop-list">
      {workshops.map((workshop) => (
        <WorkshopCard workshopData={workshop} />
      ))}
    </Row>
  );
};

export default WorkshopList;

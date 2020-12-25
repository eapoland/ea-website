import React from "react";
import { useParams } from "react-router-dom";

const WorkshopDetailsPage = () => {
  const { id } = useParams();
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <h1>{id}</h1>
    </div>
  );
};

export default WorkshopDetailsPage;

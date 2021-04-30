import React from "react"
import EAButton from "../Common/EAButton/EAButton"
import "./Workshops.scss"

const WorkshopCard = ({ workshopData }) => {
  return (
    <div className="workshop-card d-flex flex-column">
      <h3 className="text-left">{workshopData.title}</h3>
      <p>{workshopData.shortSummary}</p>
      <EAButton title="Czytaj więcej" target={`workshops/${workshopData.id}`} />
    </div>
  )
}

export default WorkshopCard

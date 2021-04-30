import React from 'react'
import EAButton from '../../../components/Common/EAButton/EAButton'
import './styles.scss'

const WorkshopCard = ({ workshopData }) => (
  <div className="workshop-card d-flex flex-column">
    <h3 className="text-left">{workshopData.title}</h3>
    <p>{workshopData.shortSummary}</p>
    <EAButton title="Czytaj więcej" target={`workshops/${workshopData.id}`} />
  </div>
)

export default WorkshopCard

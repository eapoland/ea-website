import React from 'react'
import Row from 'reactstrap/lib/Row'
import ScrollToTop from '../../components/ScrollToTop'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import PromotedWorkshop from './PromotedWorkshop'
import WorkshopList from './WorkshopList'
import WorkshopFaq from './WorkshopFaq'
import './Workshops.scss'

const Workshops = () => (
  <>
    <ScrollToTop />
    <Row className="flex-column align-items-center ea-row">
      <SectionTitle
        title="Warsztaty i szkolenia"
        text="Zapoznaj się z naszą ofertą"
      />
      <PromotedWorkshop />
      <WorkshopList />
      {/* <Testimonials /> */}
      <WorkshopFaq />
    </Row>
  </>
)

export default Workshops

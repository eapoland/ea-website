import React from 'react'
import { Row, Col } from 'reactstrap'
import ScrollToTop from '../../components/ScrollToTop'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './AboutPage.scss'
import teamMembers from './content/teamMembers'
import consultants from './content/consultants'
import MemberCard from './MemberCard'
import ConsultantCard from './ConsultantCard'
import WorkedWithUsSlider from './WorkedWithUsSlider'
import FieldsTabs from './FieldsTabs'

const AboutPage = () => (
  <div className="about">
    <ScrollToTop />
    <SectionTitle text="O nas" title="Czym jest Efektywny Altruizm?" />
    <Row className="about__intro">
      <Col sm={6}>
        <h3>
          ,,Jak przynieść światu
          <br />
          najwięcej dobra?”
        </h3>
        <p>
          Efektywny Altruizm to międzynarodowa społeczność szukająca odpowiedzi
          na to pytanie. Zdobytą tą drogą wiedzę wykorzystujemy później w
          praktyce, pracując na rzecz obszarów, które najbardziej potrzebują
          naszej pomocy. Okazuje się, że przy użyciu ograniczonych środków
          możemy mieć wpływ na realne zmiany na świecie.
        </p>
      </Col>
      <Col sm={6} />
    </Row>
    <Row className="about__fields">
      <Col>
        <div className="about__fields--intro">
          <h3 className="text-center">Obszary działania</h3>
          <p>
            Łączymy umysł i serce - naukowe podejście do świata i empatyczną
            postawę. Naszym celem jest zwiększanie świadomości na temat
            dobroczynności oraz angażowanie się w działania, które
            najefektywniej poprawią sytuację istot odczuwających. Obecnie
            główne, choć nie wyłączne obszary naszego zainteresowania, to:
          </p>
        </div>
        <FieldsTabs />
      </Col>
    </Row>
    <Row className="about__work">
      <Col sm={6} />
      <Col sm={6}>
        <h3>Jak działamy w Polsce?</h3>
        <p>
          Fundacja Efektywny Altruizm to polska gałąź globalnego ruchu Effective
          Altruism.
        </p>
        <p>
          <b>Prowadzimy działalność badawczą</b> w zakresie priorytetów
          dobroczynnych dla Polski i regionu.
        </p>
        <p>
          <b>Szkolimy</b> z podstaw i dobrych praktyk efektywnej dobroczynności.
          W trakcie naszych spotkań szukamy odpowiedzi na trudne pytania.
          Przyglądamy się problemom filozoficznym, naukowym, jak i praktycznym
          aspektom czynienia dobra.
        </p>
        <p>
          <b>Łączymy ludzi i organizacje</b>. Tym pierwszym doradzamy w wyborze
          kariery lub celu darowizn w zgodzie z ich wartościami. Tym drugim
          pomagamy w pozyskaniu talentu i maksymalizacji ich korzystnego wpływu
          poprzez doradztwo.
        </p>
        <p>
          <b>Prowadzimy zbiórki</b> na rzecz najefektywniejszych organizacji
          dobroczynnych wg. ewaluatorów <b>GiveWell</b> i{' '}
          <b>Animal Charity Evaluators</b>.
        </p>
        <p>
          Działamy we współpracy z <b>The Centre for Effective Altruism</b> w
          Oksfordzie i zaprzyjaźnionymi organizacjami na całym świecie.
        </p>
      </Col>
    </Row>
    <Row className="about__team">
      <Col>
        <h3 className="text-center">Nasz zespół</h3>
        <div className="d-flex flex-wrap justify-content-center about__team--list">
          {teamMembers.map(member => (
            <MemberCard key={member.name} teamMember={member} />
          ))}
        </div>
      </Col>
    </Row>
    <Row className="about__consultants">
      <Col>
        <h3 className="text-center">Doradzają nam</h3>
        <div className="d-flex flex-wrap justify-content-center about__team--consultants">
          {consultants.map(member => (
            <ConsultantCard key={member.name} consultant={member} />
          ))}
        </div>
      </Col>
    </Row>
    <Row className="about__team about__ex">
      <Col>
        <h3 className="text-center">Pracowali z nami</h3>
        <WorkedWithUsSlider />
      </Col>
    </Row>
  </div>
)

export default AboutPage

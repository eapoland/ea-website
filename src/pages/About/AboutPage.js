import React from "react";
import { Row, Col } from "reactstrap";
import ScrollToTop from "../../components/ScrollToTop";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./AboutPage.scss";
import Tabs, { TabPane } from "rc-tabs";
import kmizio from "../../assets/images/team/kmizio.png";
import mtruong from "../../assets/images/team/mtruong.png";
import mtischner from "../../assets/images/team/mtischner.png";
import mtrzesimiech from "../../assets/images/team/mtrzesimiech.png";
import mjaryczewska from "../../assets/images/team/mjaryczewska.png";
import mhawelka from "../../assets/images/team/mhawelka.png";
import MemberCard from "./MemberCard";

const teamMembers = [
  {
    name: "Katarzyna Mizio",
    photo: kmizio,
    position: "stanowisko",
    desc: "opis osoby",
    email: "katarzyna.mizio@efektywnyaltruizm.org",
    linkedin: "URL"
  },
  {
    name: "Maja Laura Jaryczewska",
    photo: mjaryczewska,
    position: "stanowisko",
    desc: "opis osoby",
    email: "maja.laura.jaryczewska@efektywnyaltruizm.org",
    linkedin: "URL"
  },
  {
    name: "Maria Gembarzewska-Truong",
    photo: mtruong,
    position: "stanowisko",
    desc: "opis osoby",
    email: "maria.gembarzewska-truong@efektywnyaltruizm.org",
    linkedin: "URL"
  },
  {
    name: "Michał Trzęsimiech",
    photo: mtrzesimiech,
    position: "stanowisko",
    desc: "opis osoby",
    email: "michal.trzesimiech@efektywnyaltruizm.org",
    linkedin: "URL"
  },
  {
    name: "Marcin Tischner",
    photo: mtischner,
    position: "stanowisko",
    desc: "opis osoby",
    email: "marcin.tischner@efektywnyaltruizm.org",
    linkedin: "URL"
  },
  {
    name: "Michał Hawełka",
    photo: mhawelka,
    position: "stanowisko",
    desc: "opis osoby",
    email: "michal.hawelka@efektywnyaltruizm.org",
    linkedin: "URL"
  }

]


const AboutPage = () => {

  return (
    <div className="about">
      <ScrollToTop />
      <SectionTitle text="O nas" title="Czym jest Efektywny Altruizm?"  />
      <Row className="about__intro">
        <Col sm={6}>
          <h3>,,Jak przynieść światu<br />najwięcej dobra?”</h3>
          <p>Efektywny Altruizm to międzynarodowa społeczność szukająca odpowiedzi na to pytanie. Zdobytą tą drogą wiedzę wykorzystujemy później w praktyce, pracując na rzecz obszarów, które najbardziej potrzebują naszej pomocy. Okazuje się, że przy użyciu ograniczonych środków możemy mieć wpływ na realne zmiany na świecie.</p>
        </Col>
        <Col sm={6}>
        </Col> 
      </Row>
      <Row className="about__fields">
        <Col>
          <div className="about__fields--intro">
            <h3 className="text-center">Obszary działania</h3>
            <p>Łączymy umysł i serce - naukowe podejście do świata i empatyczną postawę. Naszym celem jest zwiększanie świadomości na temat dobroczynności oraz angażowanie się w działania, które najefektywniej poprawią sytuację istot odczuwających. Obecnie główne, choć nie wyłączne obszary naszego zainteresowania, to:</p>   
          </div>
          <Tabs defaultActiveKey="1" tabPosition={"top"}>
            <TabPane tab="Zdrowie publiczne" key="1">
              <h3>Globalne zdrowie publiczne, w tym zdrowie psychiczne</h3>
              <p>W krajach o niskim i średnim dochodzie ludzie codziennie umierają na skutek chorób (takich jak malaria), którym potrafimy już łatwo zapobiegać. Wspierając najefektywniejsze organizacje walczące z tym problemem możemy niewielkim nakładem środków chronić zdrowie i życie innych ludzi. Wspieramy też działalność badawczą w domenie globalnego zdrowia psychicznego.</p>
            </TabPane>
            <TabPane tab="Technologia" key="2">
              <h3>Dalekosiężna przyszłość, w tym regulacja technologii</h3>
              <p>Nie ograniczamy się do walki z dotykającymi nas obecnie problemami. Musimy myśleć także o przyszłych pokoleniach oraz o świecie, jaki dla nich pozostawimy. Przykładem jest zapobieżenie przyszłym pandemiom, ale też zagrożeniom, jakie niosą ze sobą nowe technologie: zaawansowana sztuczna inteligencja lub biologia syntetyczna. Obecnie tylko kilkaset osób na świecie zajmuje się tymi problemami, choć zagadnienia te mogą okazać się kluczowe dla bezpieczeństwa przyszłości.</p>
            </TabPane>
            <TabPane tab="Prawa zwierząt" key="3">
              <h3>Dobrostan zwierząt hodowlanych</h3>
              <p>Na świecie co roku 60 miliardów zwierząt lądowych i 80 miliardów zwierząt wodnych jest hodowanych i zabijanych w okropnych warunkach.  Obecnie tylko znikoma część funduszy charytatywnych przekazywanych jest na poprawę tej sytuacji. W połączeniu z dużą skalą zjawiska oznacza to, że posiadamy obecnie możliwość ograniczenia ogromnej skali cierpienia i tylko od nas zależy jak tą szansę wykorzystamy.</p>
            </TabPane>
            <TabPane tab="Klimat i środowisko" key="4">
              <h3>Efektywny enwironmentalizm</h3>
              <p>Silnie rozwinięte ekonomie, jak USA i kraje UE skupiają się dzisiaj na redukcji emisji gazów cieplarnianych. Jednak w 2040 roku 75% emisji pochodzić będzie z dynamicznie rozwijających się państw, takich jak Chiny czy Indie. Czysta energia może rozpowszechnić się we wszystkich krajach tylko wtedy, jeśli stanie się odpowiednio tania - do tego potrzebny jest rozwój technologii. Niestety obecnie na samą energię wydajemy 300 razy więcej niż na prace badawcze, których zadaniem jest jej udoskonalenie.</p>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
      <Row className="about__work">
        <Col sm={6}>
        </Col>
        <Col sm={6}>
          <h3>Jak działamy w Polsce?</h3>
          <p>Fundacja Efektywny Altruizm to polska gałąź globalnego ruchu Effective Altruism.</p>
          <p><b>Prowadzimy działalność badawczą</b> w zakresie priorytetów dobroczynnych dla Polski i regionu.</p>
          <p><b>Szkolimy</b> z podstaw i dobrych praktyk efektywnej dobroczynności. W trakcie naszych spotkań szukamy odpowiedzi na trudne pytania. Przyglądamy się problemom filozoficznym, naukowym, jak i praktycznym aspektom czynienia dobra.</p>
          <p><b>Łączymy ludzi i organizacje</b>. Tym pierwszym doradzamy w wyborze kariery lub celu darowizn w zgodzie z ich wartościami. Tym drugim pomagamy w pozyskaniu talentu i maksymalizacji ich korzystnego wpływu poprzez doradztwo.</p>
          <p><b>Prowadzimy zbiórki</b> na rzecz najefektywniejszych organizacji dobroczynnych wg. ewaluatorów <b>GiveWell</b> i <b>Animal Charity Evaluators</b>.</p>
          <p>Działamy we współpracy z <b>The Centre for Effective Altruism</b> w Oksfordzie i zaprzyjaźnionymi organizacjami na całym świecie.</p>
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
    </div>
  );
};

export default AboutPage;

import React from "react";
import { Row, Col } from "reactstrap";
import SectionTitle from "../ContentSection/SectionTitle";
import Person from "./Person";
import "./TeamSection.scss";
import mtrzesi from "../../assets/images/team/michaltrzesimiech.png";
import maja from "../../assets/images/team/majalaura.jpg";
import maria from "../../assets/images/team/marysiagt.jpg";
import michal from "../../assets/images/team/michalhawelka.jpg";
import kasia from "../../assets/images/team/kasiamizio.jpg";
import marcin from "../../assets/images/team/marcintischner.jpg";

const teamMembers = [
  {
    name: "Michał Trzęsimiech",
    desc:
      "Przedsiębiorca dobroczynny działający w zaniedbanych, choć obiecujących obszarach aktywności publicznej. Organizator międzynarodowej społeczności Effective Altruism i inicjator jej struktur w Polsce. Prezes Fundacji Efektywny Altruizm - pełni tę funkcję od jej powstania w 2017 r.",
    linkedIn: "https://www.linkedin.com/in/trzesimiech/",
    mail: "michal.trzesimiech@efektywnyaltruizm.org",
    photo: mtrzesi,
  },
  {
    name: "Maja Laura Jaryczewska",
    desc:
      "Zajmuje się głównie muzyką: studiuje kompozycję oraz fortepian jazzowy na Akademii Muzycznej w Gdańsku, pracuje nad solowym albumem i gra w zespole Ścianka. Dyrektorka Wykonawcza Fundacji Efektywny Altruizm oraz wolontariuszka Otwartych Klatek.",
    linkedIn: "https://www.linkedin.com/in/maja-laura-jaryczewska-846106193/",
    mail: "maja.laura.jaryczewska@efektywnyaltruizm.org",
    photo: maja,
  },
  {
    name: "Maria Gembarzewska-Truong",
    desc:
      "Psycholożka, trenerka, HRowiec. Dyrektorka ds. Komunikacji w Fundacji Efektywny Altruizm. Przyświeca jej jeden cel - tworzyć lepszy świat. Miłośniczka jogi, wycieczek górskich i zwierzęcej behawiorystyki.",
    linkedIn: "https://www.linkedin.com/in/maria-gembarzewska-truong/",
    mail: "maria.gembarzewska-truong@efektywnyaltruizm.org",
    photo: maria,
  },
  {
    name: "Katarzyna Mizio",
    desc:
      "Doktorantka Uniwersytetu Wrocławskiego w dziedzinie biologii molekularnej. W Fundacji pełni funkcję Dyrektorki ds. kapitału ludzkiego. Od 2016 roku zaangażowana jest również w działania Otwartych Klatek. W wolnych chwilach lubi czytać.",
    linkedIn: "https://www.linkedin.com/in/katarzyna-m-069380175/",
    mail: "katarzyna.mizio@efektywnyaltruizm.org",
    photo: kasia,
  },
  {
    name: "Michał Hawełka",
    desc:
      "Zawodowo zajmuje się programowaniem (full stack developer). W Fundacji Efektywny Altruizm pełni rolę Dyrektora IT. Wspiera Otwarte Klatki i Stowarzyszenie GameUP w zakresie IT i montażu wideo. W wolnym czasie przygotowuję się do przebiegnięcia maratonu, gotuje roślinne i gra w Minecrafta.",
    linkedIn: "https://www.linkedin.com/in/michalhawelka/",
    mail: "michal.hawelka@efektywnyaltruizm.org",
    photo: michal,
  },
  {
    name: "Marcin Tischner",
    desc:
      "Poszukuje efektywnych sposobów na stworzenie bardziej zrównoważonej przyszłości żywności. W Fundacji pełni funkcję Dyrektora ds. Rozwoju/ Współpracy. Pracuje także dla ProVeg Polska, Too Good To Go i Targów Zero Waste.",
    linkedIn: "",
    mail: "marcin.tischner@efektywnyaltruizm.org",
    photo: marcin,
  },
];

const TeamSection = () => {
  return (
    <Row id="team" className={`team-section justify-content-center`}>
      <Col xs={9} className="mx-auto">
        <SectionTitle title="about.team" />
        <div className="d-flex flex-wrap justify-content-around">
          {teamMembers.map((member) => (
            <Person key={member.name} data={member} />
          ))}
        </div>
        <h5 className="content-section__subheading">Pracowali z nami</h5>
        <ul>
          <li>Karolina Sarek</li>
          <li>Marcin Kowrygo</li>
          <li>Agnieszka Pisz</li>
          <li>Marcin Wosinek</li>
          <li>Daniel Wyrzykowski</li>
        </ul>
      </Col>
    </Row>
  );
};

export default TeamSection;

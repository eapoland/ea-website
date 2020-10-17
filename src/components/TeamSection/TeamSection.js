import React from "react";
import { Row, Col } from "reactstrap";
import SectionTitle from "../ContentSection/SectionTitle";
import Person from "./Person";

const teamMembers = [
  {
    name: "Michał Trzęsimiech",
    desc:
      "Przedsiębiorca dobroczynny działający w zaniedbanych, choć obiecujących obszarach aktywności publicznej. Organizator międzynarodowej społeczności Effective Altruism i inicjator jej struktur w Polsce. Prezes Fundacji Efektywny Altruizm - pełni tę funkcję od jej powstania w 2017 r.",
    linkedIn: "https://www.linkedin.com/in/trzesimiech/",
    mail: "michal.trzesimiech@efektywnyaltruizm.org",
  },
  {
    name: "Maja Laura Jaryczewska",
    desc:
      "Zajmuje się głównie muzyką: studiuje kompozycję oraz fortepian jazzowy na Akademii Muzycznej w Gdańsku, pracuje nad solowym albumem i gra w zespole Ścianka. Dyrektorka Wykonawcza Fundacji Efektywny Altruizm oraz wolontariuszka Otwartych Klatek.",
    linkedIn: "https://www.linkedin.com/in/maja-laura-jaryczewska-846106193/",
    mail: "maja.laura.jaryczewska@efektywnyaltruizm.org",
  },
  {
    name: "Maria Gembarzewska-Truong",
    desc:
      "Psycholożka, trenerka, HRowiec. Dyrektorka ds. Komunikacji w Fundacji Efektywny Altruizm. Przyświeca jej jeden cel - tworzyć lepszy świat. Miłośniczka jogi, wycieczek górskich i zwierzęcej behawiorystyki.",
    linkedIn: "https://www.linkedin.com/in/maria-gembarzewska-truong/",
    mail: "maria.gembarzewska-truong@efektywnyaltruizm.org",
  },
  {
    name: "Katarzyna Mizio",
    desc:
      "Doktorantka Uniwersytetu Wrocławskiego w dziedzinie biologii molekularnej. W Fundacji pełni funkcję Dyrektorki ds. kapitału ludzkiego. Od 2016 roku zaangażowana jest również w działania Otwartych Klatek. W wolnych chwilach lubi czytać.",
    linkedIn: "https://www.linkedin.com/in/katarzyna-m-069380175/",
    mail: "katarzyna.mizio@efektywnyaltruizm.org",
  },
  {
    name: "Michał Hawełka",
    desc:
      "Zawodowo zajmuje się programowaniem (full stack developer). W Fundacji Efektywny Altruizm pełni rolę Dyrektora IT. Wspiera Otwarte Klatki i Stowarzyszenie GameUP w zakresie IT i montażu wideo. W wolnym czasie przygotowuję się do przebiegnięcia maratonu, gotuje roślinne i gra w Minecrafta.",
    linkedIn: "https://www.linkedin.com/in/michalhawelka/",
    mail: "michal.hawelka@efektywnyaltruizm.org",
  },
  {
    name: "Marcin Tischner",
    desc:
      "Poszukuje efektywnych sposobów na stworzenie bardziej zrównoważonej przyszłości żywności. W Fundacji pełni funkcję Dyrektora ds. Rozwoju/ Współpracy. Pracuje także dla ProVeg Polska, Too Good To Go i Targów Zero Waste.",
    linkedIn: "",
    mail: "marcin.tischner@efektywnyaltruizm.org",
  },
];

const TeamSection = () => {
  return (
    <Row className={`mx-auto justify-content-center`}>
      <Col xs={9}>
        <SectionTitle title="about.team" />
        <ul>
          {teamMembers.map((member) => (
            <Person key={member.name} data={member} />
          ))}
        </ul>
      </Col>
    </Row>
  );
};

export default TeamSection;

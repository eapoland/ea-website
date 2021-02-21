import React from "react";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";
import ScrollToTop from "../../components/ScrollToTop";
import "./ActPage.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import act from "../../assets/images/act.png";
import change from "../../assets/images/change.png";
import volunteer from "../../assets/images/volunteer.png";
import EAButton from "../../components/Common/EAButton/EAButton";
import Tabs, { TabPane } from "rc-tabs";

const content = [
  {
    heading: "Przekaż darowiznę",
    text:
      "Twoja darowizna może wspomóc działania EA w Polce. Dzięki niej będziemy mogli utworzyć specjalistyczne etaty, co przełoży się na dynamikę rozwoju ruchu, zwiększenie naszych możliwości edukacyjnych, a w efekcie zwielokrotni efektywność wpłat tysięcy darczyńców. Możesz również wybrać aby EA przekazał Twoje pieniądze organizacjom rekomendowanym przez GiveWell, Animal Charity Evaluators lub The Life You Can Save., a więc organizacjom najskuteczniejszym na świecie, czyniącym najwiecej dobra ze przekazywane im dary.",
    cta: "Przekaż darowiznę",
    img: change,
    imgAlt: "test",
  },
  {
    heading: "Wolontariat",
    text:
      "Twoja darowizna może wspomóc działania EA w Polce. Dzięki niej będziemy mogli utworzyć specjalistyczne etaty, co przełoży się na dynamikę rozwoju ruchu, zwiększenie naszych możliwości edukacyjnych, a w efekcie zwielokrotni efektywność wpłat tysięcy darczyńców. Możesz również wybrać aby EA przekazał Twoje pieniądze organizacjom rekomendowanym przez GiveWell, Animal Charity Evaluators lub The Life You Can Save., a więc organizacjom najskuteczniejszym na świecie, czyniącym najwiecej dobra ze przekazywane im dary.",
    cta: "Dołącz do nas",
    img: volunteer,
    imgAlt: "test",
  },
  {
    heading: "Działaj",
    text:
      "Twoja darowizna może wspomóc działania EA w Polce. Dzięki niej będziemy mogli utworzyć specjalistyczne etaty, co przełoży się na dynamikę rozwoju ruchu, zwiększenie naszych możliwości edukacyjnych, a w efekcie zwielokrotni efektywność wpłat tysięcy darczyńców. Możesz również wybrać aby EA przekazał Twoje pieniądze organizacjom rekomendowanym przez GiveWell, Animal Charity Evaluators lub The Life You Can Save., a więc organizacjom najskuteczniejszym na świecie, czyniącym najwiecej dobra ze przekazywane im dary.",
    cta: "Zacznij działać",
    img: act,
    imgAlt: "test",
  },
];

const ActPage = () => {
  return (
    <div className="act">
      <ScrollToTop />
      <SectionTitle title="Działaj z nami" text="Wesprzyj nas" />
      <Row className="act__type" style={{ backgroundColor: "#edcf00" }}>
        <Col className="act__type--photo">
          <img src={content[0].img} alt={content[0].imgAlt} />
        </Col>
        <Col className="act__type--desc">
          <h2>{content[0].heading}</h2>
          <p>{content[0].text}</p>
          <EAButton title={content[0].cta} size={180} />
        </Col>
      </Row>
      <Row className="act__type">
        <Col className="act__type--desc">
          <h2>{content[1].heading}</h2>
          <p>{content[1].text}</p>
          <EAButton title={content[1].cta} size={180} />
        </Col>
        <Col className="act__type--photo">
          <img src={content[1].img} alt={content[1].imgAlt} />
        </Col>
      </Row>
      <Row className="act__type">
        <Col className="act__type--photo">
          <img src={content[2].img} alt={content[2].imgAlt} />
        </Col>
        <Col className="act__type--desc">
          <h2>{content[2].heading}</h2>
          <p>{content[2].text}</p>
          <EAButton title={content[2].cta} size={180} />
        </Col>
      </Row>
      <Row className="act__tabs">
        <Col>
          <h2>Jak jeszcze możesz pomóc?</h2>
          <Tabs defaultActiveKey="1" tabPosition={"left"}>
            <TabPane tab="Poznaj podstawy EA" key="1">
              <div>
                <h3>Przeczytaj o efektywnym altruizmie</h3>
                <p>
                  Na stronie <a href="https://effectivealtruism.org">effectivealtruism.org</a> znajduje się
                  lista artykułów poruszających wiele podstawowych kwestii, kilka nagrań wideo i lista
                  książek, które przybliżą Ci czym jest EA. Jeśli zastanawiasz się, na których obszarach się
                  skupić, zapoznaj się z narzędziem do priorytetyzacji i profilami obiecujących obszarów. W
                  serwisie Coursera, dostępny jest darmowy kurs Petera Singera - wstęp do efektywnego
                  altruizmu.
                </p>
                <p>
                  Zewnętrze fora, takie jak StackExchange, Quora, AskHistorians, AskScience czy ChangeMyView
                  to kolejne źródło informacji. Polecamy zapoznać się z dobrze zadanymi pytaniami autorstwa
                  Alexa K. Chen na Quora. Jeśli otrzymasz dobre odpowiedzi, które mogą przydać się innym
                  członkom EA, zestaw je we wpisie na blogu i udostępnij na EA Forum.
                </p>
                <p>
                  Rozważ karierę zadedykowaną celom EA. Zapoznaj się z przewodnikiem przygotowanym przez
                  80,000 Hours, który zawiera wiele informacji dotyczących nie tylko wyboru ścieżki kariery,
                  ale również powiązanych rozważań dotyczących EA.
                </p>
                <p>
                  Jeśli znasz idęę EA, przyłącz się do dyskusji na Effective Altruism Forum. Autorzy należący
                  do społeczności prowadzą tu ważne rozważania w dziedzinach zgodnych z ich kompetencjami.
                </p>
                <p>
                  Doświadczeni działacze ruchu poszerzają wiedzę czytając blogi związane z EA, tworząc
                  artykuły na EA Forum lub zostając badaczami w powiązanej organizacji (czytaj o tym niżej).
                </p>
              </div>
              <h3>Subskrybuj newsletter EA</h3>
              <p>
                Raz w miesiącu EA rozsyła newsletter z najważniejszymi informacjami. Również comiesięczny
                newsletter EA Concepts pomaga zapoznać się z podstawowymi ideami niezbędnymi do myślenia w
                kryteriach efektywnego altruizmu. Dostępne są także kanały internetowe RSS, np Blogtrottr,
                dzięki którym otrzymasz mail, gdy pojawi się nowy wpis na EA Forum (RSS) lub na EA Blogs
                (RSS).
              </p>
              <h3>Weź udział w EAGx lub spotkaniu lokalnej grupy</h3>
              <p>
                Weź udział w EAGx lub wydarzeniu grupy w Twoim regionie. Wydarzenia te organizowane są by
                przybliżyć idee EA oraz oraz umożliwić wgląd w środowisko EA od podszewki. Aby wziąć udział w
                takim wydarzeniu, na stronie “O Nas” sprawdź do której lokalnej grupy możesz dołączyć na
                Facebook’u i bądź na bieżąco z wydarzeniami organizowanymi w najbliższym czasie.
              </p>
              <h3>Weź udział w warsztacie z racjonalności stosowanej</h3>
              <p>
                Budowanie zdolności personalnych to jedna z najlepszych ścieżek pomagania na dłuższą metę.
                Center for Applied Rationality (CFAR) oferuje regularne warsztaty podczas których wykształca
                się narzędzia do rozwoju personalnego. Jeśli chcesz usprawnić swoją produktywność i trafność
                swojego rozumowania, odwiedź FAQ oraz listę nadchodzących warsztatów. Dzięki opublikowanej
                przez CFAR liście pozycji do przeczytania oraz wskazówkom podpartym badaniami naukowymi na
                stronie 80,000 Hours masz możesz realizować proces samodoskonalenia samodzielnie i bezpłatnie.
              </p>
            </TabPane>
            <TabPane tab="Rozwijaj obszar" key="2">
              Est vidit deseruisse in, mei ullum blandit maluisset ad. Ut sea iriure dolores. Vel tollit
              eirmod dolores ea, errem periculis usu ut. Eum alii soleat dissentiet ne. Ridens accumsan cum
              an, ei eum solum pertinacia democritum.
            </TabPane>
            <TabPane tab="Wybierz karierę" key="3">
              Facete fierent ea mel, id nec delectus invenire elaboraret. Vel illum mollis eu, sit in latine
              theophrastus, mei nulla suscipit comprehensam ad.
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
};

export default ActPage;

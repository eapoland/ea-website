import React from 'react'
import Col from 'reactstrap/lib/Col'
import Row from 'reactstrap/lib/Row'
import Tabs, { TabPane } from 'rc-tabs'
import ScrollToTop from '../../components/ScrollToTop'
import './Act.scss'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import content from './content/copy'
import GAService from '../../services/GAService'

const Act = () => (
  <div className="act">
    <ScrollToTop />
    <SectionTitle title="Działaj z nami" text="Wesprzyj nas" />
    <Row className="act__type" style={{ backgroundColor: '#edcf00' }}>
      <Col xs={12} md={6} className="act__type--photo">
        <img src={content[0].img} alt={content[0].imgAlt} />
      </Col>
      <Col xs={12} md={6} className="act__type--desc">
        <h3>{content[0].heading}</h3>
        <p>{content[0].text}</p>
        <a
          href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=FFLJ8KDN5CAUA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="btn ea-button"
            style={{ width: '12rem' }}
            type="button"
          >
            {content[0].cta}
          </button>
        </a>
      </Col>
    </Row>
    <Row className="act__type">
      <Col xs={12} md={6} className="act__type--desc">
        <h3>{content[1].heading}</h3>
        <p>{content[1].text}</p>
        <a
          href="http://bit.ly/3qRaVfV"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="btn ea-button"
            style={{ width: '11rem' }}
            type="button"
            onClick={() => {
              GAService.sendVolunteerEvent(`Registration form button clicked`)
            }}
          >
            {content[1].cta}
          </button>
        </a>
      </Col>
      <Col xs={12} md={6} className="act__type--photo">
        <img src={content[1].img} alt={content[1].imgAlt} />
      </Col>
    </Row>
    {/* <Row className="act__type">
        <Col className="act__type--photo">
          <img src={content[2].img} alt={content[2].imgAlt} />
        </Col>
        <Col className="act__type--desc">
          <h3>{content[2].heading}</h3>
          <p>{content[2].text}</p>
          <EAButton title={content[2].cta} size={180} />
        </Col>
      </Row> */}
    <Row className="act__tabs">
      <Col>
        <h3>Jak jeszcze możesz pomóc?</h3>
        <Tabs defaultActiveKey="1" tabPosition="left">
          <TabPane tab="Poznaj podstawy EA" key="1">
            <div>
              <h3>Przeczytaj o efektywnym altruizmie</h3>
              <p>
                Na stronie{' '}
                <a
                  href="https://effectivealtruism.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  effectivealtruism.org
                </a>{' '}
                znajduje się lista artykułów poruszających wiele podstawowych
                kwestii, kilka nagrań wideo i lista książek, które przybliżą Ci
                czym jest EA. Jeśli zastanawiasz się, na których obszarach się
                skupić, zapoznaj się z narzędziem do priorytetyzacji i profilami
                obiecujących obszarów. W serwisie Coursera, dostępny jest
                darmowy kurs Petera Singera - wstęp do efektywnego altruizmu.
              </p>
              <p>
                Zewnętrze fora, takie jak StackExchange, Quora, AskHistorians,
                AskScience czy ChangeMyView to kolejne źródło informacji.
                Polecamy zapoznać się z dobrze zadanymi pytaniami autorstwa
                Alexa K. Chen na Quora. Jeśli otrzymasz dobre odpowiedzi, które
                mogą przydać się innym członkom EA, zestaw je we wpisie na blogu
                i udostępnij na EA Forum.
              </p>
              <p>
                Rozważ karierę zadedykowaną celom EA. Zapoznaj się z
                przewodnikiem przygotowanym przez 80,000 Hours, który zawiera
                wiele informacji dotyczących nie tylko wyboru ścieżki kariery,
                ale również powiązanych rozważań dotyczących EA.
              </p>
              <p>
                Jeśli znasz ideę EA, przyłącz się do dyskusji na Effective
                Altruism Forum. Autorzy należący do społeczności prowadzą tu
                ważne rozważania w dziedzinach zgodnych z ich kompetencjami.
              </p>
              <p>
                Doświadczeni działacze ruchu poszerzają wiedzę czytając blogi
                związane z EA, tworząc artykuły na EA Forum lub zostając
                badaczami w powiązanej organizacji (czytaj o tym niżej).
              </p>
            </div>
            <h3>Subskrybuj newsletter EA</h3>
            <p>
              Raz w miesiącu EA rozsyła newsletter z najważniejszymi
              informacjami. Również comiesięczny newsletter EA Concepts pomaga
              zapoznać się z podstawowymi ideami niezbędnymi do myślenia w
              kryteriach efektywnego altruizmu. Dostępne są także kanały
              internetowe RSS, np Blogtrottr, dzięki którym otrzymasz mail, gdy
              pojawi się nowy wpis na EA Forum (RSS) lub na EA Blogs (RSS).
            </p>
            <h3>Zainstaluj wtyczkę Altruisto</h3>
            <p>
              Podobnie jak z bezpośrednimi wpłatami na najefektywniejsze
              organizacje charytatywne, prostym sposobem na czynienie
              mierzalnego wpływu na świecie jest zainstalowanie wtyczki
              Altruisto. Altruisto pozwala użytkownikom zbierać fundusze podczas
              zakupów online na najefektywniejsze organizacje charytatywne
              rekomendowane przez GiveWell, Animal Charity Evaluators i The Life
              You Can Save. Użytkownik nie ponosi żadnych dodatkowych kosztów za
              kupione produkty/usługi, Altruisto również nie śledzi aktywności
              online indywidualnych użytkowników. Więcej informacji i możliwość
              pobrania wtyczki na oficjalnej stronie:{' '}
              <a
                href="https://altruisto.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://altruisto.com
              </a>
            </p>
            <p>
              Autorem wtyczki jest Daniel Wyrzykowski, jeden z doradców Fundacji
              Efektywny Altruizm.
            </p>
            <h3>Weź udział w EAGx lub spotkaniu lokalnej grupy</h3>
            <p>
              Weź udział w EAGx lub wydarzeniu grupy w Twoim regionie.
              Wydarzenia te organizowane są by przybliżyć idee EA oraz oraz
              umożliwić wgląd w środowisko EA od podszewki. Aby wziąć udział w
              takim wydarzeniu, na stronie “O Nas” sprawdź do której lokalnej
              grupy możesz dołączyć na Facebook’u i bądź na bieżąco z
              wydarzeniami organizowanymi w najbliższym czasie.
            </p>
            <h3>Weź udział w warsztacie z racjonalności stosowanej</h3>
            <p>
              Budowanie zdolności personalnych to jedna z najlepszych ścieżek
              pomagania na dłuższą metę. Center for Applied Rationality (CFAR)
              oferuje regularne warsztaty podczas których wykształca się
              narzędzia do rozwoju personalnego. Jeśli chcesz usprawnić swoją
              produktywność i trafność swojego rozumowania, odwiedź FAQ oraz
              listę nadchodzących warsztatów. Dzięki opublikowanej przez CFAR
              liście pozycji do przeczytania oraz wskazówkom podpartym badaniami
              naukowymi na stronie 80,000 Hours masz możesz realizować proces
              samodoskonalenia samodzielnie i bezpłatnie.
            </p>
          </TabPane>
          <TabPane tab="Rozwijaj obszar" key="2">
            <h3>Napisz post na bloga</h3>
            <p>
              Pisanie i publikowanie postów na blogu jest wspaniałym sposobem
              zarówno na przynoszenie korzyści innym, jak i praktykowanie swoich
              własnych umiejętności. W związku z tym, że przestrzeń EA jest w
              chwili obecnej stosunkowo młoda, każdy autor ma szansę przyczynić
              się do postępu w istotnej dziedzinie i rzucić nowe światło na
              pewne zagadnienia. Mimo, że zachęcamy wszystkich do krytycznego
              myślenia o tematach związanych z EA, taka aktywność najlepiej
              sprawdzi się w przypadku osób, które są dobrze zaznajomione z
              efektywnym altruizmem i/lub jego poszczególnymi obszarami.
            </p>
            <h3>Przeprowadź wywiad z ekspertem</h3>
            <p>
              W związku z tym, że efektywny altruizm jest wciąż kiełkującym
              obszarem, istnieje zapotrzebowanie na publikowanie informacji.
              Jeśli chciałabyś/chciałbyś dowiedzieć się więcej na jakiś temat i
              podzielić się wiedzą z innymi, przeprowadź wywiad z odpowiednim
              ekspertem i udostępnij go szerszemu gronu. Eksperci mogą zapoznać
              Cię z wybraną dziedziną wiedzy lub problematyką i podzielić się
              doświadczeniem.
            </p>
            <h3>Weryfikuj opublikowane badania</h3>
            <p>
              Większość badań, które są przedmiotem zainteresowania efektywnych
              altruistów, jest nowa i przeprowadzona w ograniczonym zakresie,
              jeśli w ogóle. Aby podnieść standardy i jakość badań, jednostki i
              organizacje powinny przekazywać sobie nawzajem informacje zwrotne
              na temat sposobów myślenia i pracy. Dotyczy to weryfikowania prac
              publikowanych przez organizacje związane z EA, szczególnie, jeśli
              chodzi o pomoc potrzebującym i edukację: Czy prowadzone lekcje
              miały sens? Czy są jakieś kontrargumenty, które pominięto? Taka
              praca często wymaga budowania relacji z jednostkami i/lub
              organizacjami oraz gruntownej wiedzy na temat EA lub specyficznej
              dziedziny.
            </p>
            <h3>Zrób przegląd literatury lub meta-analizę</h3>
            <p>
              Zwykle ciężko uzyskać klarowny obraz najnowszych badań w
              dziedzinach istotnych dla EA. Meta-analizy - całościowe analizy
              licznych, pojedynczych badań - są o wiele silniejszym dowodem na
              korzystny wpływ poszczególnych działań niż jedno potwierdzające go
              badanie, są więc świetnym narzędziem dla osób chcących zmieniać
              świat na lepsze przy pomocy dowodów i rozumu. Podobnie jak the
              Cochrane Collaboration istnieje po to, by ewaluować i podsumowywać
              dowody wspierające najlepsze praktyki medyczne, tak również i
              efektywny altruizm mógłby skorzystać z przygotowywanych
              meta-analiz, np. na temat fortyfikacji i suplementacji jodem czy
              kalibracji.
            </p>
            <h3>Napisz pracę na temat obszarów działalności lub problemów</h3>
            <p>
              Społeczność efektywnych altruistów uzyskała dobre rozeznanie w
              kilku obszarach - działaniach na rzecz polepszenia opieki
              zdrowotnej na świecie, reformowania hodowli przemysłowej czy
              ogólnego zrozumienia zagrożeń związanych z rozwojem sztucznej
              inteligencji - ale mogłaby wykorzystać swoje zasoby umysłowe
              również w innych, obiecujących dziedzinach. W związku z tym, że
              prawie każda organizacja EA musiała zawęzić swoje pole działania,
              żeby móc się lepiej skupić na swoich zadaniach, wiele spraw, które
              mogłyby być priorytetyzowane ze względu na skalę i
              rozwiązywalność, jest zaniedbywanych. Potrzebne są osoby gotowe do
              tego, by zejść z utartego szlaku i badać dziedziny, które zwykle
              znajdują się poza kompetencjami istniejących organizacji, aby
              poinformować sieć EA o tym, czy istnieją jakieś obszary, które
              powinny się znaleźć na liście priorytetów.
            </p>
            <h3>Staw czoła kluczowym problemom</h3>
            <p>
              W przypadku znalezienia odpowiedzi na pewne pytania, nasze
              przekonania na temat tego, na czym należy się skupiać, mogłyby się
              drastycznie zmienić. Skoncentrowanie swoich badań na kluczowych
              problemach mogłoby mieć zasadniczy wpływ w porównaniu do innych
              możliwości. Pytania o tym charakterze są z definicji istotne, a
              brak odpowiedzi na nie często wynika z trudnej,
              interdyscyplinarnej i/lub niepewnej natury problemów, których one
              dotykają. Stawienie czoła jednemu z nich jest świetnym projektem
              dla ambitnych badaczy, którzy są szczególnie entuzjastycznie
              nastawieni do przyczyniania się do globalnych zmian.
            </p>
          </TabPane>
          <TabPane tab="Wybierz karierę" key="3">
            <h3>Rozważ ścieżki kariery polecane przez EA</h3>
            <p>
              Jeśli jesteś studentem lub początkującym pracownikiem i
              chciałabyś/chciałbyś robić to, co najlepsze dla świata i
              równocześnie poważnie podchodzisz do swoich wartości, możesz
              przenieść je na wyższy poziom i pracować w obszarze efektywnego
              altruizmu w pełnym wymiarze godzin. W swojej pracy będziesz
              spędzać naprawdę dużo czasu, a pamiętaj, że Twój czas jest jednym
              z najlepszych zasobów, które mogą przyczynić się do czynienia
              różnicy na świecie. Znalezienie sposobu, w jaki spędzać ten czas w
              najkorzystniejszy sposób może być jednak naprawdę trudne.
            </p>
            <h3>Zaaplikuj o pracę związaną z EA</h3>
            <p>
              Jeśli jesteś profesjonalistą, któremu bliskie są idee EA chcącym
              poświęcić swój czas i energię na rzeczy, które są najlepsze dla
              świata, możesz starać się o zatrudnienie pełnowymiarowe w pracy
              związanej z EA.
            </p>
            <h3>Zaaplikuj o grant</h3>
            <p>
              Masz pomysł na startup, który może mieć duży wpływ, ale nie masz
              wystarczającej ilości pieniędzy na jego sfinansowanie?
              Chciałabyś/chciałbyś prowadzić badania, ale nie możesz znaleźć na
              to czasu? Jeśli tak, to jesteś doskonałym kandydatem do otrzymania
              grantu EA, nowej inicjatywy Centre for Effective Altruism mającej
              na celu wsparcie przedsiębiorczych altruistów w ich dążeniach do
              maksymalizacji dobra. Program grantowy jest otwarty dla wszystkich
              osób pełnoletnich i oferuje dofinansowania w wysokości nawet 100
              000 funtów, jak również indywidualne porady w sprawie wyboru
              kariery udzielane przez doradcę z 80,000 Hours. Dodatkowymi
              atutami są prestiż i wsparcie, których prawdopodobnie nie
              gwarantowałoby indywidualne prowadzenie projektu.
            </p>
            <p>
              Żeby dowiedzieć się więcej i zaaplikować, wejdź na stronę{' '}
              <a
                href="https://www.effectivealtruism.org/grants/"
                target="_blank"
                rel="noopener noreferrer"
              >
                EA Grants
              </a>
              .
            </p>
            <h3>Zacznij projekt zainspirowany EA</h3>
            <p>
              Masz pomysł na projekt, który byłby wartościowy? Dysponujesz
              wolnym czasem i jesteś przedsiębiorczy? Jeśli dobrze odnajdujesz
              się w przestrzeni EA i uważasz, że Twój pomysł jest naprawdę wart
              realizacji, spisz plan projektu i podziel się nim z ekspertami w
              danej dziedzinie lub na odpowiednich grupach EA na Facebooku, a
              następnie postaraj się go urzeczywistnić. Istnieje wiele{' '}
              <a
                href="http://effective-altruism.com/ea/18p/concrete_project_lists/"
                target="_blank"
                rel="noopener noreferrer"
              >
                pomysłów na projekty
              </a>
              , które warto by było zrealizować, więc możesz zainspirować się
              jednym z nich.
            </p>
            <h3>Bądź aktywistą w pracy</h3>
            <p>
              Twoi współpracownicy mogą potencjalnie stanowić ogromną,
              niewykorzystaną bazę darczyńców. Ludzie zwykle chcą przyczynić się
              do zmiany świata na lepsze, ale nie wiedzą, od czego zacząć.
              Możesz być ogniwem, które pomoże im przekuć ich chęci w praktykę.
              Poza tym, firmy zwykle prowadzą programy, które mogą nawet potroić
              ilość pieniędzy, która dotrze do organizacji.
            </p>
            <h3>
              Zastosuj mindset EA w swoim życiu i w swoich społecznościach
            </h3>
            <p>
              Efektywny altruizm jest społecznością młodą, która do 2012 roku
              nie uzyskała jeszcze nawet swojej nazwy. Od tamtej pory zrobiliśmy
              bardzo duże postępy, ale jest jeszcze o wiele więcej rzeczy do
              zrobienia. Jeśli dołączasz do efektywnego altruizmu z
              doświadczeniem w dziedzinie, która jest niedostatecznie
              reprezentowana w społeczności (tj. większość dziedzin poza
              filozofią akademicką i informatyką), prawdopodobnie nie doszliśmy
              jeszcze do tego, jak najlepiej wykorzystać dorobek Twojej
              dyscypliny — a być może nie wiemy nawet, że może być ona przydatna
              dla EA.
            </p>
            <h3>Prowadź zajęcia dotyczące EA</h3>
            <p>
              Jeśli pracujesz na uniwersytecie, jesteś nauczycielem lub
              studentem uczelni, która umożliwia prowadzenie kursów studentom,
              rozważ poprowadzenie kursu na temat efektywnego altruizmu.
              Tematyka EA historycznie jest powiązana z wydziałami filozofii i
              ekonomii, ale dobrze łączyłaby się również z dziedzinami STEM
              (naukowymi, technicznymi, inżynieryjnymi, matematycznymi),
              biznesowymi, statystycznymi czy społecznymi.
            </p>
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  </div>
)

export default Act

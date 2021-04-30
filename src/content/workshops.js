import michal from "../assets/images/panelists/mtrzesimiech.png"
import maja from "../assets/images/panelists/mjaryczewska.png"
import marcin from "../assets/images/panelists/mtischner.png"
import maria from "../assets/images/panelists/mtruong.png"

const hosts = {
  mtrzesimiech: {
    name: "Michał Trzęsimiech",
    desc:
      "Przedsiębiorca dobroczynny działający w zaniedbanych, choć obiecujących obszarach aktywności publicznej. Organizator międzynarodowej społeczności Effective Altruism i inicjator jej struktur w Polsce. Prezes Fundacji Efektywny Altruizm - pełni tę funkcję od jej powstania w 2017 r.",
    photo: michal,
  },
  mjaryczewska: {
    name: "Maja Laura Jaryczewska",
    desc:
      "Zajmuje się głównie muzyką: studiuje kompozycję oraz fortepian jazzowy na Akademii Muzycznej w Gdańsku, tworzy pod pseudonimem Maja Laura oraz współtworzy zespoły Abyss i Ścianka.  Dyrektorka Wykonawcza Fundacji Efektywny Altruizm oraz wolontariuszka Otwartych Klatek.",
    photo: maja,
  },
  mtischner: {
    name: "Marcin Tischner",
    desc:
      "Poszukuje efektywnych sposobów na stworzenie bardziej zrównoważonej przyszłości żywności. Pracuje także dla ProVeg Polska, Too Good To Go i Targów Zero Waste. Dyrektor ds. rozwoju/współpracy Fundacji Efektywny Altruizm.",
    photo: marcin,
  },
  mtruong: {
    name: "Maria Gembarzewska-Truong",
    desc:
      "Psycholożka, trenerka, HRowiec. Przyświeca jej jeden cel - tworzyć lepszy świat. Miłośniczka jogi, wycieczek górskich i zwierzęcej behawiorystyki. Dyrektorka ds. komunikacji Fundacji Efektywny Altruizm.",
    photo: maria,
  },
}

const workshops = [
  {
    id: 1,
    title: "Warsztaty z efektywności w rzecznictwie",
    shortSummary:
      "Jak działać efektywnie w obszarze rzecznictwa w społecznie istotnych kwestiach?",
    audience: "pracowników organizacji pozarządowych",
    summary:
      "Świat jest złożony, a nasz rozum ograniczony. Jako gatunek jesteśmy kiepscy w przewidywaniu przyszłości. A jednak wiemy o takich działaniach, które przynoszą rezultaty znacząco lepsze, niż ich alternatywy. Czy odpowiada za to wyłącznie los? A może jesteśmy w stanie zarządzić działaniem tak, aby przynieść światu zdecydowanie więcej dobra, niż miałoby to miejsce gdybyśmy zadziałali inaczej? W trakcie tych warsztatów poszukamy odpowiedzi na pytanie o to jak działać efektywnie, odnosząc się w szczególności do działań w obszarze rzecznictwa w społecznie istotnych kwestiach.",
    limit: "brak limitu uczestników",
    duration: "3 godziny",
    price: "pierwszy wykład bez opłaty",
    modules: [
      "Panel wprowadzający (60 minut)",
      "Dyskusja (30 minut)",
      "Warsztat (90 minut)",
    ],
    hosts: [hosts["mtrzesimiech"]],
  },
  {
    id: 2,
    title:
      "Warsztaty z ocalania świata. O globalnych ryzykach katastroficznych",
    shortSummary:
      "Jak zapobiec kolejnej pandemii? Co z innymi zagrożeniami? Jak w nadchodzącej dekadzie zapobiec globalnym katastrofom?",
    audience:
      "konferencji dotyczących pandemii i zmian klimatycznych, środowiska filozofów i etyków, młodzieży szkolnej",
    summary:
      "Czy pandemii można było zapobiec? A jeśli tak, to w jaki sposób zapobiec kolejnej? Co z innymi zagrożeniami? Jak w nadchodzącej dekadzie zapobiec globalnym katastrofom? Od cyberwojny przez nieudane eksperymenty biotechnologiczne i ekstremalne zjawiska pogodowe związane z ociepleniem klimatu – przeprowadzimy Was przez najczarniejsze scenariusze nieodległych przyszłości. Poszukamy też nadziei w sposobach na które ludzkość może wyjść z tych z kryzysów obronną ręką.",
    limit: "brak limitu uczestników",
    duration: "3 godziny",
    price: "pierwszy wykład bez opłaty",
    modules: [
      "Panel wprowadzający (60 minut)",
      "Dyskusja (30 minut)",
      "Warsztat (90 minut)",
    ],
    hosts: [hosts["mtrzesimiech"]],
  },
  {
    id: 3,
    title: "Dobrostan zawodowy",
    shortSummary:
      "Dobrostan zawodowy wpływa na to czy czujemy się w naszej pracy dobrze. Jak go osiągnąć?",
    audience: "pracowników korporacji",
    summary:
      "Dobrostan zawodowy wpływa na to czy czujemy się w naszej pracy dobrze. Tak jakbyśmy byli dokładnie w tym miejscu, w którym powinniśmy się znaleźć. Nie chodzi o poczucie rozpierającej euforii przez 100% czasu w pracy, ale o poczucie, że jest mi dobrze tu, gdzie jestem a to daje mi poczucie spokoju. Sprawia, że wierzę, w to, że moja praca wspiera mnie i wspiera realizację moich celów życiowych. Wpływa na realizację mojej agendy życiowej (a nie przeszkadza). Aby osiągnąć dobrostan zawodowy należy zadbać o kilka obszarów. Podczas tego spotkania omówimy każdy z tych obszarów oraz podamy praktyczne wskazówki, które wpływają na wzrost w tych obszarach.",
    limit: "brak limitu uczestników",
    duration: "60 minut",
    price: "pierwszy wykład bez opłaty",
    hosts: [hosts["mtruong"]],
  },
  {
    id: 4,
    title: "Efektywny Altruizm & Doradztwo filantropijne",
    shortSummary:
      "Masz wyjątkowe możliwości, aby czynić dobro - dowiedz się w jaki sposób je zmaksymalizować!",
    audience:
      "filantropów, pracowników działu CSR i PR w korporacjach, pracowników organizacji pozarządowych współpracujących z biznesem, fundacji korporacyjnych, fundacji i instytucji grantodawczych",
    limit: "brak limitu uczestników",
    summary:
      "Gdy potrzebujemy pomocy medycznej, wybieramy sposoby leczenia, których skuteczność została potwierdzona naukowo. Gdy inwestujemy pieniądze, staramy się dowiedzieć jak najwięcej o wszystkich możliwościach, żeby wybrać taką, która przyniesie nam największe korzyści. Gdy kupujemy jakiś produkt, czytamy opinie wystawiane przez kupujących, żeby dowiedzieć się, czy produkt faktycznie działa tak, jak tego oczekujemy. Czy w ten sam sposób analizujemy działalność charytatywną, którą wspieramy finansowo? Jeśli chodzi o czynienie dobra, zapominamy jednak o naszych standardach. Przekazujemy pieniądze organizacjom charytatywnym tylko dlatego, że ktoś podszedł do nas na ulicy, a prawie nigdy nie dowiadujemy się, jak nasze pieniądze zostały wykorzystane. Jesteśmy wolontariuszami w organizacjach, bo działąją lokalnie, a nie dlatego, że są efektywne. Kupujemy produkty “etyczne”, bo są oznaczone pewnymi etykietami, bez wgłębiania się w to, co one faktycznie oznaczają. W rezultacie, dobre intencje są często zmarnowane, bo ludzie wykorzystują swój czas i pieniądze na wspieranie celów, które przynoszą stosunkowo mało korzyści. Masz wyjątkowe możliwości, aby czynić dobro - dowiedz się w jaki sposób je zmaksymalizować!",
    duration: "60 minut",
    price: "pierwszy wykład bez opłaty",
    hosts: [hosts["mtischner"]],
  },
  {
    id: 5,
    title: "Wprowadzenie do Efektywnego Altruizmu",
    shortSummary:
      "Czy uważasz, że świat mógłby być lepszy? Czy chcesz mieć wpływ na jego pozytywną zmianę? Jak czynić dobro lepiej?",
    summary:
      "Czy uważasz, że świat mógłby być lepszy? Czy chcesz mieć wpływ na jego pozytywną zmianę? Jak czynić dobro lepiej? Mamy nadzieję, że podczas tego spotkania przekonamy Cię, że każdy – także Ty – może zostać Efektywnym Altruistą. Efektywny Altruizm to pytanie o to, jak przynieść światu najwięcej dobra. To międzynarodowa społeczność szukająca odpowiedzi na to pytanie, by wykorzystać tę wiedzę w praktyce. Podczas spotkania opowiemy Wam historię Efektywnego Altruizmu ruchu i efektywnego altruizmu idei z której ten ruch wyrasta. Wychodząc od pytań filozoficznych, omówimy szereg praktycznych zagadnień związanych z dobroczynnością.",
    recommended: true,
    audience:
      "pracowników korporacji, studentów, pracowników i wolontariuszy organizacji pozarządowych, administracji publicznej, fundacji korporacyjnych, fundacje i instytucje grantodawczych",
    limit: "brak limitu uczestników",
    duration: "60 minut",
    price: "pierwszy wykład bez opłaty",
    hosts: [hosts["mtrzesimiech"], hosts["mjaryczewska"]],
  },
]

export default workshops

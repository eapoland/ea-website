import React from "react";
import SectionTitleWithTranslation from "../../components/SectionTitle/SectionTitleWithTranslation";

const CooperationPage = () => {
  return (
    <>
      <SectionTitleWithTranslation content={"cooperation"} />
      <h2>Z organizacjami</h2>
      <p>
        Prowadzisz firmę lub organizację pozarządową? Porozmawiajmy o tym, jak powiększyć Twój dobroczynny
        ślad, lub społeczną odpowiedzialność!
      </p>
      <h4>Szkolenia i warsztaty</h4>
      <p>
        Prowadzimy regularne szkolenia i warsztaty. Na Twoje kontakt@efektywnyaltruizm.org zamówienie
        przygotujemy treści dostosowane do potrzeb Twojej organizacji.
      </p>
      <ul>
        <li>
          <h5>Wprowadzenie do efektywnego altruizmu</h5>
          <p>
            Efektywny Altruizm to pytanie o to, jak przynieść światu najwięcej dobra. To międzynarodowa
            społeczność szukająca odpowiedzi na to pytanie, by wykorzystać tę wiedzę w praktyce. Podczas tego
            spotkania opowiemy Wam historię Efektywnego Altruizmu ruchu i efektywnego altruizmu idei z której
            ten ruch wyrasta. Wychodząc od pytań filozoficznych, omówimy szereg praktycznych zagadnień
            związanych z dobroczynnością. Wyjdziecie stąd z najlepszą dostępną nam wiedzą o tym, jak czynić
            dobro efektywnie i co to właściwie znaczy. Samodzielnie odpowiecie też na pytanie, jak Wy sami
            możecie mieć wkład w największą możliwą poprawę świata.
          </p>
          <button>Wyślij pytanie kontakt@efektywnyaltruizm.org</button>
        </li>
        <li>
          <h5>Warsztaty z ocalania świata. Jak zapobiec ryzykom katastroficznym nadchodzącej dekady?</h5>
          <p>
            Czy pandemiom można zapobiec? A jeśli tak, to w jaki sposób zapobiec kolejnej? Jakie inne ryzyka
            pomijamy — i czy je także możemy kontrolować? Od cyberwojny po nieudane eksperymenty
            biotechnologiczne i ekstremalne zjawiska pogodowe związane z ociepleniem klimatu, przeprowadzimy
            was przez najczarniejsze scenariusze nieodległych przyszłości, a także sposoby na które ludzkość
            może wyjść obronną ręką z obecnych i przyszłych kryzysów.
          </p>
          <button>Wyślij pytanie kontakt@efektywnyaltruizm.org</button>
        </li>
        <li>
          <h5>Warsztaty z efektywności w rzecznictwie</h5>
          <p>
            Świat jest złożony, a nasz rozum ograniczony. Jako gatunek jesteśmy kiepscy w przewidywaniu
            przyszłych wydarzeń. A jednak niektóre działania przynoszą znacząco lepszy rezultat, niż inne
            mające na celu ten sam lub podobny efekt. Czy odpowiada za to wyłącznie los? A może jesteśmy w
            stanie zarządzić działaniem tak, aby przynieść światu zdecydowanie więcej dobra, niż miałoby to
            miejsce gdybyśmy zadziałali inaczej? W trakcie tych warsztatów poszukamy odpowiedzi na pytanie o
            to jak działać efektywnie, odnosząc się w szczególności do działań w obszarze rzecznictwa.
          </p>
          <button>Wyślij pytanie kontakt@efektywnyaltruizm.org</button>
        </li>
      </ul>
      <h4>Doradztwo</h4>
      <p>
        Porozmawiajmy o sposobach, na jaki Twoja organizacja może osiągnać największy dobroczynny zwrot, lub
        wzmonić swoją odpowiedzialność społeczną *kontakt do Marcina Tischnera*.
      </p>
    </>
  );
};

export default CooperationPage;

import React from "react";
import { useParams } from "react-router-dom";
import "../styles/RezeptDetail.css"; 


const rezeptDaten = {
  1: {
    name: "Tiramisu",
    image: "/images/tiramisu.jpg",
    zutaten: ["Mascarpone", "Espresso", "Löffelbiskuits", "Kakao", "Zucker", "Eier"],
    zubereitung: [
      "Eigelb mit dem Zucker über heißem Wasserdampf in einer Metallschüssel sehr cremig schlagen.",
      "Vanillezucker, geriebene Zitronenschale sowie Mascarpone unterrühren.",
      "Den Espresso mit dem Amaretto vermischen und die Löffelbiskuits kurz darin durchziehen.",
      "Eine Glasschale mit der Hälfte der Löffelbiskuits auslegen.",
      "Die Hälfte der Creme über die Löffelbiskuits streichen, dann restliche Biskuits und Creme darauf verteilen.",
      "Das Tiramisu für 2 Stunden in den Kühlschrank stellen.",
      "Kurz vor dem Servieren mit Kakaopulver bestäuben und genießen."
    ]
  },
  2: {
    name: "Mujadara",
    image: "/images/mujadara.jpg",
    zutaten: ["Reis", "Linsen", "Zwiebeln", "Olivenöl", "Kreuzkümmel", "Salz"],
    zubereitung: [
      "Koche alle Zutaten (außer Reis und Wasser) auf und lasse sie für 25 Minuten bei mittlerer Hitze köcheln.",
      "Füge den Reis und das Wasser hinzu und lasse es erneut aufkochen.",
      "Bei mäßiger Hitze (Stufe 4/9) für weitere 10 bis 15 Minuten garen.",
      "Währenddessen die Zwiebeln in Öl scharf anbraten und dann weitergaren, bis sie goldbraun sind.",
      "Zum Schluss alles vermengen und einige Zwiebeln als Topping beiseitelegen."
    ]
  },
  3: {
    name: "Schwarzwälder Kirschtorte",
    image: "/images/schwarzwaelder.jpeg",
    zutaten: ["Schokobiskuit", "Kirschen", "Sahne", "Kirschwasser", "Schokolade"],
    zubereitung: [
      "Eigelb mit Wasser und Zucker schlagen, bis eine cremige Masse entsteht.",
      "Mehl, Stärke, Backpulver und Kakao mischen und unterheben.",
      "Eiweiß steif schlagen und vorsichtig unterheben.",
      "Den Teig in eine gefettete Springform geben und bei 200 °C ca. 30–35 Min. backen.",
      "Sauerkirschen abgießen, den Saft auffangen, mit Speisestärke binden und aufkochen.",
      "Den Tortenboden zweimal durchschneiden, den untersten mit Kirschwasser beträufeln und mit der Kirschmasse bestreichen.",
      "Sahne mit Sahnesteif und Zucker steif schlagen, dünn auf die Kirschmasse streichen, nächsten Boden auflegen.",
      "Den nächsten Boden aufdrücken, mit Sahne bestreichen und mit Schokoraspeln bestreuen.",
      "Die Torte mit Sahne verzieren, Tuffs aufspritzen und mit Kirschen belegen."
    ]
  }
};

const RezeptDetail = () => {
  const { id } = useParams();
  const rezept = rezeptDaten[id];

  if (!rezept) {
    return <h2>Rezept nicht gefunden!</h2>;
  }

  return (
    <div className="rezept-detail">
      <h1>{rezept.name}</h1>
      <img src={rezept.image} alt={rezept.name} className="rezept-bild" />

      <h2>Zutaten:</h2>
      <ul className="zutaten-liste">
        {rezept.zutaten.map((zutat, index) => (
          <li key={index}>{zutat}</li>
        ))}
      </ul>

      <h2>Zubereitung:</h2>
      <ol className="zubereitung-liste">
        {rezept.zubereitung.map((schritt, index) => (
          <li key={index}>{schritt}</li>
        ))}
      </ol>
    </div>
  );
};

export default RezeptDetail;

import { useEffect, useState } from "react";
import Card from "./card";

async function getData() {
  const url = "http://localhost:3001/cards";
  try {
    const response = await fetch(url);

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

function Call() {
  const [API, setApiCards] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      const allCards = data.map((card) => ({
        ...card,
        count: Math.floor(Math.random() * 50) + 1,
      }));
      setApiCards(allCards);
    });
  }, []);

  return (
    <div className="card-grid">
      {API.map((card, i) => (
        <Card
          key={i}
          title={card.title}
          initialNumber={card.count}
          BgColor={card.backgroundColor}
        />
      ))}
    </div>
  );
}

export default Call;

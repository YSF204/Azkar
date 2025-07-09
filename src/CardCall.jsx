import { useEffect, useState } from "react";
import Card from "./card";

async function getData() {

    const url = "http://localhost:3001/cards";
    try {
        const response = await fetch(url);

        if (!response.ok) {

            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json.cards || json;

    } catch (error) {


        console.error(error.message);
        return [];
    }
}

function Call() {
    const [API, setApiCards] = useState([]);

    useEffect(() => {
        getData().then(data => {
            const shuffled = [...data].sort(() => 0.5 - Math.random());
            const randomCards = shuffled.slice(0, 6).map(card => ({
                ...card,
                count: Math.floor(Math.random() * 50) + 1,
            }));
            setApiCards(randomCards);
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
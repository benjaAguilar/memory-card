import { useEffect, useState } from "react";
import getPokemons, { pokemonNames } from "./getPoke";

function CardsGame() {
  const [cardsData, setCardsData] = useState([]);
  const [clickedCard, setClickedCard] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBest] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const allPokeData = await Promise.all(
        pokemonNames.map(async (pokemon) => {
          const pokeData = await getPokemons(pokemon);
          return pokeData;
        })
      );

      setCardsData(allPokeData);
    };

    getData();
  }, []);

  function shuffle() {
    const arr = cardsData;
    const shuffledArray = [];

    while (arr.length !== 0) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      shuffledArray.push(arr[randomIndex]);
      arr.splice(randomIndex, 1);
    }

    setCardsData(shuffledArray);
  }

  function checkCard(id) {
    if (clickedCard.includes(id)) {
      alert("You lose!");
      setClickedCard([]);
      score > bestScore ? setBest(score) : null;
      setScore(0);
      shuffle();
      return;
    }

    setClickedCard([...clickedCard, id]);
    setScore((score) => score + 1);
    shuffle();
  }

  return (
    <div>
      <div className="scores">
        <h2>Score: {score}</h2>
        <h2>Best: {bestScore}</h2>
      </div>
      <div className="card-box">
        {cardsData.map((card) => {
          return (
            <div
              className="card"
              key={card.id}
              onClick={() => checkCard(card.id)}
            >
              <img src={card.img} alt="" />
              <h3>{card.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardsGame;

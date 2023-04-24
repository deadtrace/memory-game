import React, { FC, useEffect, useRef, useState } from "react";
import "./App.css";
import Counter from "../Counter/Counter";
import CardsList from "../CardsList/CardsList";
import { HIDE_CARDS_TIMEOUT, NUMBER_OF_ATTEMPTS } from "../../constants";
import { createCardsOrder } from "../../utils";
import { ICard } from "../../types";
import Notification from "../Notification/Notification";

const App: FC = () => {
  const [attempts, setAttempts] = useState(0);
  const [cards, setCards] = useState<ICard[]>([]);
  const [selectedCards, setSelectedCards] = useState<Set<number>>(new Set());
  const [guessedCards, setGuessedCards] = useState<Set<number>>(new Set());
  const timeoutRef = useRef<number>();

  useEffect(() => {
    setCards(createCardsOrder());

    return () => {
      window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const onCardSelect = (id: number) => {
    if (selectedCards.size === 2) {
      window.clearTimeout(timeoutRef.current);
      setSelectedCards(new Set([id]));
    } else {
      setSelectedCards((prev) => new Set([...prev, id]));
    }
  };

  const startNewGame = () => {
    setAttempts(0);
    setSelectedCards(new Set());
    setGuessedCards(new Set());
    setCards(createCardsOrder());
  };

  useEffect(() => {
    if (selectedCards.size === 2) {
      const [first, second] = [...selectedCards];
      if (cards[first].id === cards[second].id) {
        setSelectedCards(new Set());
        setGuessedCards((prev) => new Set([...prev, first, second]));
      } else {
        timeoutRef.current = window.setTimeout(() => {
          setSelectedCards(new Set());
        }, HIDE_CARDS_TIMEOUT);
      }
      setAttempts((prev) => prev + 1);
    }
  }, [selectedCards]);

  return (
    <>
      <main className="main">
        <h1 className="main__heading">Memory</h1>
        <div className="main__game">
          <Counter name="Сделано ходов" value={attempts} />
          <CardsList
            onCardSelect={onCardSelect}
            cards={cards}
            selectedCards={selectedCards}
            guessedCards={guessedCards}
          />
          <Counter
            name="Осталось попыток"
            value={NUMBER_OF_ATTEMPTS - attempts}
          />
        </div>
      </main>
      <Notification
        attempts={attempts}
        guessedCards={guessedCards}
        startNewGame={startNewGame}
      />
    </>
  );
};

export default App;

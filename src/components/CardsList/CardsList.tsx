import React, { FC } from "react";
import Card from "../Card/Card";
import "./CardsList.css";
import { ICard } from "../../types";

interface Props {
  onCardSelect: (id: number) => void;
  cards: ICard[];
  selectedCards: Set<number>;
  guessedCards: Set<number>;
}

const CardsList: FC<Props> = ({
  onCardSelect,
  cards,
  selectedCards,
  guessedCards,
}) => {
  return (
    <section className="cards">
      {cards.map((card, i) => (
        <Card
          key={i}
          card={card}
          onClick={() => onCardSelect(i)}
          show={selectedCards.has(i)}
          hidden={guessedCards.has(i)}
        />
      ))}
    </section>
  );
};

export default CardsList;

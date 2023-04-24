import React, { FC } from "react";
import "./Notification.css";
import {
  CARDS_TOTAL_COUNT,
  LOSER_TEXT,
  NUMBER_OF_ATTEMPTS,
  WINNER_TEXT,
} from "../../constants";

interface Props {
  attempts: number;
  guessedCards: Set<number>;
  startNewGame: () => void;
}

const Notification: FC<Props> = ({ attempts, guessedCards, startNewGame }) => {
  if (
    attempts >= NUMBER_OF_ATTEMPTS ||
    guessedCards.size === CARDS_TOTAL_COUNT
  ) {
    return (
      <div className="notification">
        <div className="modal notification__modal">
          <p className="modal__text">
            {attempts >= NUMBER_OF_ATTEMPTS
              ? LOSER_TEXT
              : WINNER_TEXT.replace("n", attempts.toString())}
          </p>
          <button className="modal__button" onClick={startNewGame}>
            Сыграть ещё
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default Notification;

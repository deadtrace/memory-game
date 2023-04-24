import React, { FC } from "react";
import "./Card.css";
import cardLogo from "../../images/card-logo.svg";
import { ICard } from "../../types";

interface Props {
  onClick: () => void;
  card: ICard;
  show: boolean;
  hidden: boolean;
}

const Card: FC<Props> = ({ onClick, card, show, hidden }) => {
  return hidden ? (
    <div className="card card--empty" />
  ) : (
    <div className={`card ${show ? "card--shown" : ""}`} onClick={onClick}>
      <img src={show ? card.image : cardLogo} alt="" />
    </div>
  );
};

export default Card;

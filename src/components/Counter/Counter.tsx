import React, { FC } from "react";
import "./Counter.css";

interface Props {
  name: string;
  value: number;
}

const Counter: FC<Props> = ({ name, value }) => {
  return (
    <div className="counter">
      <div className="counter__name">{name}</div>
      <div className="counter__value">{value}</div>
    </div>
  );
};

export default Counter;

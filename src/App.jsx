import React from "react";
import { turnIsRecorded } from './utils/turn'
import { winningStates } from './utils/consts'
import "./style.css";

export const App = () => {
  const [number, setNumber] = useState();

  const handleClick = (index) => setNumber(index);

  return (
    <div className="grid">
      {Array.from(Array(9)).map((_, index) => (
        <div
          className={`cell ${number === index ? 'x' : ''}`}
          key={index}
          onClick={() => handleClick(index)}
        ></div>
      ))}
    </div>
  );
};
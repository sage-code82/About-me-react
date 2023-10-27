import React, { useState } from "react";

export default function Dice() {
  const [numberOfDice, setNumberOfDice] = useState(1);
  const [rollResult, setRollResult] = useState(null);

  const rollDice = () => {
    const maxRoll = 6;
    let totalRoll = 0;
    for (let i = 0; i < numberOfDice; i++) {
      totalRoll += Math.floor(Math.random() * maxRoll) + 1;
    }
    setRollResult(totalRoll);
  };

  return (
    <main>
      <h2>Chuck Some Dice</h2>
    </main>
  );
}

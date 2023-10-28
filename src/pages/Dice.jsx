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

  const handleDiceChange = (event) => {
    setNumberOfDice(event.target.value);
  };

  return (
    <main>
      <h2>Chuck Some D6 Dice</h2>
      <div>
        <label>Number of Dice:</label>
        <input type="number" value={numberOfDice} onChange={handleDiceChange} />
      </div>
      <button onClick={rollDice}>Roll Dice</button>
      {rollResult !== null && <p>Result: {rollResult}</p>}
    </main>
  );
}

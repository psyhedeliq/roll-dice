import React, { useState } from 'react';
import { getDice } from '../../util';
import { StyledApp } from './app.style';

const RollDiceApp = () => {
  const [diceList, rollDice] = useState(getDice());
  return (
    <StyledApp>
      <h1>Roll the dice please</h1>
      {diceList.map(dice => (
        <div>{dice}</div>
      ))}
    </StyledApp>
  );
};

export { RollDiceApp };

import React, { useState } from 'react';
import { getDice } from '../../util';
import { StyledApp } from './app.style';
import { Title } from '../title';

const RollDiceApp = () => {
  const [diceList, rollDice] = useState(getDice());
  return (
    <StyledApp>
      <Title titleText='Roll the dice please' />
      {diceList.map(dice => (
        <div>{dice}</div>
      ))}
    </StyledApp>
  );
};

export { RollDiceApp };

import React, { useState } from 'react';
import { getDice } from '../../util';
import { RollButton } from '../roll-button';

const DiceList = () => {
  const [diceList, rollDice] = useState(getDice());
  const handleOnClick = () => {
    console.log('click');
    rollDice(getDice());
  };
  return [
    ...diceList.map((dice, key) => <div key={key}>{dice}</div>),
    <RollButton key='button' handleOnClick={handleOnClick} />
  ];
};

export { DiceList };

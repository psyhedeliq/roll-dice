import React, { useState } from 'react';
import { getDice } from '../../util';
import { RollButton } from '../roll-button';
import { Dice } from '../dice';

const DiceList = () => {
  const [diceList, rollDice] = useState(getDice());
  const handleOnClick = () => {
    console.log('click');
    rollDice(getDice());
  };
  return [
    ...diceList.map((dice, key) => <Dice key={key}>{dice}</Dice>),
    <RollButton key='button' handleOnClick={handleOnClick} />
  ];
};

export { DiceList };

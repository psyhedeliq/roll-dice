import React from 'react';
import { StyledDice } from './dice.style';

const Dice = ({ children }) => {
  return <StyledDice className={`dice dice-${children}`}></StyledDice>;
};

export { Dice };

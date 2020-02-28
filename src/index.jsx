import React from 'react';
import { render } from 'react-dom';

const RollDice = () => {
  console.log('This will roll the dice');
  let diceOne = Math.floor(Math.random() * 6) + 1;
  let diceTwo = Math.floor(Math.random() * 6) + 1;
  let diceThree = Math.floor(Math.random() * 6) + 1;
  return `${diceOne}${diceTwo}${diceThree}`;
};

console.log(RollDice());

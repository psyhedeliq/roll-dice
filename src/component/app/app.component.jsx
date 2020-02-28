import React from 'react';
import { StyledApp } from './app.style';
import { Title } from '../title';
import { DiceList } from '../dice-list';
import { RollButton } from '../roll-button';

const RollDiceApp = () => {
  return (
    <StyledApp>
      <Title titleText='Roll the dice please' />
      <DiceList />
    </StyledApp>
  );
};

export { RollDiceApp };

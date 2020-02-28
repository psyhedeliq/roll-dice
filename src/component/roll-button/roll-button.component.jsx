import React from 'react';
import { StyledRollButton, StyledRollButtonWrapper } from './roll-button.style';

const RollButton = ({ handleOnClick }) => {
  return (
    <StyledRollButtonWrapper>
      <StyledRollButton onClick={handleOnClick}>ROLL</StyledRollButton>
    </StyledRollButtonWrapper>
  );
};

export { RollButton };

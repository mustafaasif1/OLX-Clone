import React from 'react';
import { ReactComponent as SellButtonIcon } from '../../../../Assets/Icons/sellButton.svg';
import { ReactComponent as SellPlusIcon } from '../../../../Assets/Icons/iconPlusSell.svg';
import { SellButtonDiv } from './styled';

export const SellButton = () => (
  <SellButtonDiv>
    <button type="button">
      <SellButtonIcon id="sell" />
      <div>
        <SellPlusIcon id="iconPlusSell" />
        Sell
      </div>
    </button>
  </SellButtonDiv>
);

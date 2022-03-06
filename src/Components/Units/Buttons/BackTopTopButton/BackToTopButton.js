import React, { useState } from 'react';
import { BackToTopButtonContainer } from './styled';
import { ReactComponent as BackToTopIcon } from '../../../../Assets/Icons/backToTop.svg';

export const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 800) {
      setVisible(true);
    } else if (scrolled <= 800) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <BackToTopButtonContainer visible={visible} onClick={scrollToTop}>
      <BackToTopIcon id="backToTop" />
      Back to top
    </BackToTopButtonContainer>
  );
};

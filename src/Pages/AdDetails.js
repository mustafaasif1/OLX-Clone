import React from 'react';
import { Header } from '../Components/Header/Header';
import { Footer } from '../Components/Footer/Footer';
import { BottomLinks } from '../Components/Units/BottomLinks/BottomLinks';
import { BreadCrumbs } from '../Components/Units/BreadCrumbs/BreadCrumbs';
import { InnerAdDetails } from '../Components/InnerAdDetails/InnerAdDetails';
import { GlobalStyle } from '../Styles/GlobalStyles';
import { BackToTopButton } from '../Components/Units/Buttons/BackTopTopButton/BackToTopButton';

const AdDetails = () => (
  <>
    <Header />
    <BottomLinks />
    <BreadCrumbs />
    <InnerAdDetails />
    <Footer />
    <BackToTopButton />
    <GlobalStyle />
  </>
);

export default AdDetails;

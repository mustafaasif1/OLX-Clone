import React from 'react';
import { Header } from '../Components/Header/Header';
import { Footer } from '../Components/Footer/Footer';
import { BottomLinks } from '../Components/Units/BottomLinks/BottomLinks';
import { PopularSearches } from '../Components/Units/PopularSearches/PopularSearches';
import { CategoriesListDetails } from '../Components/CategoriesListDetails/CategoriesListDetails';
import { BackToTopButton } from '../Components/Units/Buttons/BackTopTopButton/BackToTopButton';
import { GlobalStyle } from '../Styles/GlobalStyles';

const CategoriesList = () => (
  <>
    <Header />
    <BottomLinks />
    <PopularSearches />
    <CategoriesListDetails />
    <Footer />
    <BackToTopButton />
    <GlobalStyle />
  </>
);

export default CategoriesList;

import React from 'react';
import { Header } from '../Components/Header/Header';
import { BottomLinks } from '../Components/Units/BottomLinks/BottomLinks';
import { HomepageTopBanner } from '../Components/Units/HomePageTopBanner/HomepageTopBanner';
import { HomepageBottomBanner } from '../Components/Units/HomePageBottomBanner/HomepageBottomBanner';
import { BackToTopButton } from '../Components/Units/Buttons/BackTopTopButton/BackToTopButton';
import { Footer } from '../Components/Footer/Footer';
import { HomePageCards } from '../Components/AdDisplay/HomePageCards/HomePageCards';
import { RecentAdsCarousel } from '../Components/Units/Carousels/RecentAdsCarousel/RecentAdsCarousel';
import { GlobalStyle } from '../Styles/GlobalStyles';

const Homepage = () => (
  <>
    <Header />
    <BottomLinks />
    <HomepageTopBanner />
    <RecentAdsCarousel />
    <HomePageCards />
    <HomepageBottomBanner />
    <Footer />
    <BackToTopButton />
    <GlobalStyle />
  </>
);

export default Homepage;

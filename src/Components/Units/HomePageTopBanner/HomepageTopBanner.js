import React from 'react';
import { Banner } from './styled';
import banner from '../../../Assets/Pictures/homeBanner.jpg';

export const HomepageTopBanner = () => (
  <Banner>
    <img src={banner} alt="Homepage Top Banner" />
  </Banner>
);

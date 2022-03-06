import React from 'react';
import { BasicCarousel } from '../BasicCarousel/BasicCarousel';
import { CarouselContainer, CarouselHeading } from './styled';

export const RelatedAdsCarousel = () => (
  <CarouselContainer>
    <CarouselHeading>
      <h5>Related Ads</h5>
    </CarouselHeading>
    <BasicCarousel />
  </CarouselContainer>
);

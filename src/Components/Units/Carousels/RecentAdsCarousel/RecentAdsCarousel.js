import React from 'react';
import { CarouselContainer, CarouselHeading, LinkButton } from './styled';
import { BasicCarousel } from '../BasicCarousel/BasicCarousel';

export const RecentAdsCarousel = () => (
  <CarouselContainer>
    <CarouselHeading>
      <h4>More on recent ads</h4>
      <LinkButton>View more</LinkButton>
    </CarouselHeading>
    <BasicCarousel />
  </CarouselContainer>
);

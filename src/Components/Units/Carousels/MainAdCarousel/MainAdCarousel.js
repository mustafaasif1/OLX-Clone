import React from 'react';
import { Carousel } from 'react-bootstrap';
import { CarouselContainer, CarouselImageContainer } from './styled';
import plot1 from '../../../../Assets/Pictures/plot1.jpeg';
import plot2 from '../../../../Assets/Pictures/plot2.jpeg';
import plot3 from '../../../../Assets/Pictures/plot3.jpeg';

export const MainAdCarousel = () => (
  <CarouselContainer>
    <Carousel variant="dark">
      <CarouselImageContainer>
        <img src={plot1} alt="First slide" />
      </CarouselImageContainer>
      <CarouselImageContainer>
        <img src={plot2} alt="Second slide" />
      </CarouselImageContainer>
      <CarouselImageContainer>
        <img src={plot3} alt="Third slide" />
      </CarouselImageContainer>
    </Carousel>
  </CarouselContainer>
);

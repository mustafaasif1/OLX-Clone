import React from 'react';
import { Container } from 'react-bootstrap';
import { PopularSearchesContainer } from './styled';

export const PopularSearches = () => (
  <Container>
    <PopularSearchesContainer>
      <li>
        <div>Popular Searches:</div>
      </li>
      <li>
        <a href="home">Home</a>
      </li>
      <li>
        <a href="home">Furniture & Decor</a>
      </li>
      <li>
        <a href="home">Home Decoration</a>
      </li>
      <li>
        <a href="home">Houses</a>
      </li>
      <li>
        <a href="home">Home Decoration in Punjab</a>
      </li>
      <li>
        <a href="home">Home Decoration in Rawalpindi</a>
      </li>
      <li>
        <a href="home">Home Decoration in Murree Road</a>
      </li>
    </PopularSearchesContainer>
  </Container>
);

import React from 'react';
import { Container } from 'react-bootstrap';
import { GridViewCards } from '../GridViewCards/GridViewCards';
import { TopHeading } from './styled';

export const HomePageCards = () => (
  <>
    <Container>
      <TopHeading>Fresh recommendations</TopHeading>
      <GridViewCards />
    </Container>
  </>
);

import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { AdCard } from '../../Units/AdCard/AdCard';

import { LoadMoreContainer } from './styled';

export const GridViewCards = () => {
  const ads = 10;

  return (
    <>
      <Row>
        {[...Array(ads)].map((_, index) => (
          <Col lg={3} sm={6} key={index}>
            <AdCard />
          </Col>
        ))}
      </Row>
      <LoadMoreContainer>
        <Button variant="outline-dark">Load more</Button>
      </LoadMoreContainer>
    </>
  );
};

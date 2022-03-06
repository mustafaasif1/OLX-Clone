import React from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import { AdCard } from '../../AdCard/AdCard';

export const BasicCarousel = () => {
  const ads = 4;

  return (
    <Carousel variant="dark" interval={5000} controls={false}>
      <Carousel.Item>
        <Row>
          {[...Array(ads)].map((_, index) => (
            <Col lg={3} sm={6} key={index}>
              <AdCard />
            </Col>
          ))}
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          {[...Array(ads)].map((_, index) => (
            <Col lg={3} sm={6} key={index}>
              <AdCard />
            </Col>
          ))}
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          {[...Array(ads)].map((_, index) => (
            <Col lg={3} sm={6} key={index}>
              <AdCard />
            </Col>
          ))}
        </Row>
      </Carousel.Item>
    </Carousel>
  );
};

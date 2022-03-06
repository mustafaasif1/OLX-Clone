import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { OuterDetailsPageCarousel, AdMetaData } from './styled';
import { RelatedAdsCarousel } from '../Units/Carousels/RelatedAdsCarousel/RelatedAdsCarousel';
import { MainAdCarousel } from '../Units/Carousels/MainAdCarousel/MainAdCarousel';
import { PriceWell } from '../Units/Wells/PriceWell/PriceWell';
import { LocationWell } from '../Units/Wells/LocationWell/LocationWell';
import { DetailsWell } from '../Units/Wells/DetailsWell/DetailsWell';
import { DescriptionWell } from '../Units/Wells/DescriptionWell/DescriptionWell';

export const InnerAdDetails = () => (
  <Container>
    <Row>
      <Col md={8}>
        <MainAdCarousel />
        <DetailsWell />
        <OuterDetailsPageCarousel>
          <RelatedAdsCarousel />
        </OuterDetailsPageCarousel>
      </Col>
      <Col md={4}>
        <PriceWell />
        <DescriptionWell />
        <LocationWell />
        <AdMetaData>
          <p>AD ID 1035894592</p>
          <p>REPORT THIS AD</p>
        </AdMetaData>
      </Col>
    </Row>
  </Container>
);

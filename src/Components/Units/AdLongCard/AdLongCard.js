import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import {
  AdLongCardContainer,
  AdImage,
  CardIcon,
  FeaturedHeading,
  CardDetails,
} from './styled';
import { ReactComponent as HeartIcon } from '../../../Assets/Icons/heart.svg';
import adPicture from '../../../Assets/Pictures/plot5.jpeg';

export const AdLongCard = () => (
  <AdLongCardContainer>
    <Row>
      <Col md={4}>
        <AdImage src={adPicture} alt="Advertisement" />
      </Col>
      <Col md={8}>
        <Card.Body>
          <CardIcon>
            <HeartIcon id="heart" />
          </CardIcon>
          <FeaturedHeading>FEATURED</FeaturedHeading>
          <CardDetails>
            <h5>RS 1,650,000 </h5>
            <p id="meta-details">2012 - 147,000 km</p>
            <p id="ad-details">
              Good Condition Corolla Good Condition Corolla Good Condition
              Corolla Good Condition Corolla Good Condition Corolla Good
              Condition Corolla Good Condition Corolla Good Condition Corolla
              Good Condition Corolla
            </p>
            <div id="timeAndLocation">
              <div>GUJRANWALA</div>
              <div>2 WEEKS AGO</div>
            </div>
          </CardDetails>
        </Card.Body>
      </Col>
    </Row>
  </AdLongCardContainer>
);

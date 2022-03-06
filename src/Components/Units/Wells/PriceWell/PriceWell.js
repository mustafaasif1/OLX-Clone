import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {
  PriceContainer,
  DetailIcons,
  PriceInfo,
  AdMetaDetails1,
  AdMetaDetails2,
} from './styled';
import { ReactComponent as HeartIcon } from '../../../../Assets/Icons/heart.svg';
import { ReactComponent as ShareIcon } from '../../../../Assets/Icons/share.svg';

export const PriceWell = () => (
  <PriceContainer>
    <Row>
      <Col sm={7}>
        <PriceInfo>Rs 1,275,000</PriceInfo>
      </Col>
      <Col sm={5}>
        <DetailIcons>
          <ShareIcon id="share" />
          <HeartIcon id="heart" />
        </DetailIcons>
      </Col>
    </Row>
    <AdMetaDetails1>
      <p>2006 - 104,000 km</p>
      <p id="more-details">beautiful honda city</p>
    </AdMetaDetails1>

    <AdMetaDetails2>
      <p>Bahawalpur</p>
      <p>1 week ago</p>
    </AdMetaDetails2>
  </PriceContainer>
);

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { DescriptionAndDetailsContainer, AttributesContent } from './styled';

export const DetailsWell = () => (
  <DescriptionAndDetailsContainer>
    <h5>Details</h5>
    <Row>
      <Col md={6}>
        <AttributesContent>
          <p id="attribute-heading">Price</p>
          <p>2,515,000</p>
        </AttributesContent>
      </Col>
      <Col md={6}>
        <AttributesContent>
          <p id="attribute-heading">Type</p>
          <p>Residential Plots</p>
        </AttributesContent>
      </Col>
      <Col md={6}>
        <AttributesContent>
          <p id="attribute-heading">Area unit</p>
          <p>Marla</p>
        </AttributesContent>
      </Col>
      <Col md={6}>
        <AttributesContent>
          <p id="attribute-heading">Area</p>
          <p>5</p>
        </AttributesContent>
      </Col>
    </Row>
    <hr />
    <h5>Description</h5>
    <p>
      Plot # 2931 series, 5 paid open, rescheduled up to 2024. Old booking plot
      2,095,000 good location 14 lac profit final
    </p>
  </DescriptionAndDetailsContainer>
);

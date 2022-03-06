import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { ListViewCards } from '../AdDisplay/ListViewCards/ListViewCards';
import Filters from '../Units/Filters/Filters';
import SortByDropdown from '../Units/Dropdowns/SortByDropdown/SortByDropdown';
import {
  TitleHeading,
  CenterButtonContainer,
  MoreAdsAndFilter,
  NumberOfAds,
} from './styled';

export const CategoriesListDetails = () => (
  <Container>
    <TitleHeading>Cars</TitleHeading>
    <Row>
      <Col lg={3}>
        <Filters />
      </Col>
      <Col lg={9}>
        <MoreAdsAndFilter>
          <NumberOfAds>10,000+ ads</NumberOfAds>
          <SortByDropdown />
        </MoreAdsAndFilter>
        <hr />
        <ListViewCards />
        <CenterButtonContainer>
          <Button variant="outline-dark">Load More</Button>
        </CenterButtonContainer>
      </Col>
    </Row>
  </Container>
);

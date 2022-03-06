import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const CarouselContainer = styled(Container)`
  border: 1px solid grey;
  border-radius: 4px;
  padding: 14px;
`;

export const CarouselHeading = styled.div`
  h5 {
    font-weight: bold;
  }
`;

export const LinkButton = styled.button`
  border: none;
  background-color: transparent;
  border-bottom: 2px solid;
  margin: 10px;
  padding: 0;
  font-weight: bold;
  font-size: 16px;

  @media (max-width: 992px) {
    font-size: 12px;
  }
`;

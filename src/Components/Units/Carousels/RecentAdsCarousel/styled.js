import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const CarouselContainer = styled(Container)`
  background-color: #ebeeef;
  margin-top: 40px;
  padding: 32px;
`;

export const CarouselHeading = styled.div`
  display: flex;
  justify-content: space-between;

  h4 {
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

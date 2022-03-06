import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

export const CarouselImageContainer = styled(Carousel.Item)`
  img {
    height: 500px;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

export const CarouselContainer = styled.div`
  margin-bottom: 8px;
`;

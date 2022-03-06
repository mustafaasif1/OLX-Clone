import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const MapCard = styled(Card)`
  margin: 16px 0px;

  div {
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-weight: bold;
      font-size: 12px;
    }

    #right-arrow {
      height: 25px;
      width: 25px;
    }
  }
`;

export const LocationContainer = styled.div`
  border: 1px solid grey;
  border-radius: 4px;
  padding: 14px;
  margin-bottom: 8px;

  p {
    color: grey;
    font-size: 12px;
    margin: 0;
  }

  h5 {
    font-weight: bold;
  }
`;

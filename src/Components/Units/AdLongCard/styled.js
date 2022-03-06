import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const AdLongCardContainer = styled(Card)`
  margin-bottom: 16px;
`;

export const AdImage = styled.img`
  object-fit: contain;
  height: 200px;
  width: 100%;
`;

export const CardIcon = styled.div`
  position: absolute;
  top: 8px;
  right: 16px;
  color: black;

  #heart {
    width: 24px;
    height: 24px;
  }
`;

export const FeaturedHeading = styled.div`
  display: inline-flex;
  position: relative;
  top: 0px;
  left: 0px;
  color: black;
  background-color: #f0be29;
  font-weight: bold;
  font-size: 10px;
  padding: 3px 10px;
`;

export const CardDetails = styled.div`
  margin: 10px 0;

  h5 {
    font-weight: bold;
    min-height: 20px;
    max-height: 20px;
    overflow: hidden;
  }

  p {
    margin: 0;
  }

  #meta-details {
    font-size: 14px;
    min-height: 20px;
    max-height: 20px;
    overflow: hidden;
  }

  #ad-details {
    margin: 5px 0;
    color: grey;
    font-size: 13px;
    line-height: 16px;
    min-height: 32px;
    max-height: 32px;
    overflow: hidden;
  }

  #timeAndLocation {
    display: flex;
    justify-content: space-between;
    color: grey;
    font-size: 11px;
    margin-top: 12px;
    line-height: 16px;
    min-height: 16px;
    max-height: 16px;
    overflow: hidden;

    div {
      max-width: 50%;
    }
  }
`;

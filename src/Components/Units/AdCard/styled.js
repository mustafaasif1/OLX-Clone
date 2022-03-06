import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const ImageContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

export const CustomImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const ImageText = styled.div`
  position: absolute;
  top: 8px;
  left: 16px;
  color: black;
  background-color: #f0be29;
  font-weight: bold;
  font-size: 10px;
  padding: 3px 10px;
`;

export const ImageIcon = styled.div`
  position: absolute;
  top: 8px;
  right: 16px;
  color: black;

  #heart {
    width: 25px;
    height: 25px;
  }
`;

export const BodyContainer = styled(Card.Body)`
  h6 {
    max-height: 20px;
    min-height: 20px;
    overflow: hidden;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const CardMetaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: grey;
  font-size: 10px;
  margin-top: 12px;
  line-height: 16px;
  min-height: 16px;
  max-height: 16px;
  overflow: hidden;

  div {
    max-width: 50%;
  }
`;

export const CustomCardText = styled(Card.Text)`
  line-height: 18px;
  min-height: 36px;
  max-height: 36px;
  overflow: hidden;
  font-size: 13px;
`;

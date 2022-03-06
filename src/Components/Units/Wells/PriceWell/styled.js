import styled from 'styled-components';

export const PriceContainer = styled.div`
  border: 1px solid grey;
  border-radius: 4px;
  padding: 14px;
  margin-bottom: 8px;
`;

export const DetailIcons = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: flex-end;

  #heart,
  #share {
    margin-left: 10px;
    width: 25px;
    height: 25px;
  }
`;

export const PriceInfo = styled.h3`
  font-weight: bold;
`;

export const AdMetaDetails1 = styled.div`
  p {
    margin: 0;
    font-size: 14px;
  }
  #more-details {
    color: grey;
  }
`;

export const AdMetaDetails2 = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  color: grey;
  font-size: 13px;
  p {
    margin: 0;
    font-size: 14px;
  }
`;

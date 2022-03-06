import styled from 'styled-components';

export const LocationItem = styled.div`
  text-decoration: none;
  color: black;
  cursor: pointer;

  h6 {
    margin-top: 10px;
    font-weight: bold;
    color: rgb(56, 117, 231);

    #currentLocation {
      margin-right: 10px;
      width: 16px;
      height: 16px;
    }
  }

  #location {
    margin-right: 10px;
    width: 16px;
    height: 16px;
  }
`;

export const LocationSelector = styled.div`
  width: 25%;
  margin: 8px;

  @media (max-width: 992px) {
    width: 95%;
  }
`;

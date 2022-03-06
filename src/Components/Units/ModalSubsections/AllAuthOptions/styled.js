import styled from 'styled-components';

export const LoginOptionsContainer = styled.div`
  text-align: center;

  img {
    width: 100px;
    height: 100px;
  }

  p {
    color: rgb(48, 48, 48);
    padding-top: 10px;
    padding-bottom: 15px;
  }

  button {
    width: 100%;
    border: 2px solid black;
    margin-bottom: 11px;
    border-radius: 4px;
    background-color: white;
    padding: 0;

    div {
      width: 100%;
      border: 2px solid white;
      font-weight: bold;
      text-align: center;
      padding-top: 8px;
      padding-bottom: 8px;

      :hover {
        cursor: pointer;
        border: 2px solid black;
      }

      #facebook,
      #google {
        margin-right: 10px;
        height: 16px;
        width: 16px;
        fill: black;
      }
    }
  }
`;

export const Disclaimer = styled.div`
  text-align: center;

  p {
    font-size: 14px;
    margin: 16px 0;

    span {
      color: rgb(99, 168, 233);
      font-size: 12px;
    }
  }
`;

import styled from 'styled-components';

export const FooterBackground = styled.footer`
  background-color: #ebeeef;
  padding-top: 24px;
  padding-bottom: 32px;
`;

export const FooterLinks = styled.div`
  margin: 8px;
  h6 {
    font-weight: bold;
    font-size: 14px;
  }
  div {
    p {
      padding-bottom: 2px;
      margin: 0;
      color: grey;
      font-size: 12px;

      :hover {
        color: rgb(71, 71, 71);
        cursor: pointer;
      }
    }
  }

  #facebook,
  #twitter,
  #instagram,
  #youtube {
    padding: 2px 0;
    color: grey;
    height: 24px;
    width: 24px;
    cursor: pointer;

    :hover {
      fill: black;
    }
  }
`;

export const Classified = styled.div`
  background-color: #002f34;
  padding: 16px 50px;
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  font-weight: bold;
  color: white;

  span {
    font-size: 11px;
    font-weight: 200;
  }
`;

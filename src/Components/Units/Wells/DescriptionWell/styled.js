import styled from 'styled-components';

export const SellerContainer = styled.div`
  border: 1px solid grey;
  border-radius: 4px;
  padding: 14px;
  margin-bottom: 8px;
`;

export const ContactDetails = styled.div`
  display: flex;

  img {
    width: 65px;
  }

  #InnerContact {
    display: flex;
    flex-direction: column;
    margin: 6px;

    h6 {
      font-weight: bold;
    }

    p {
      margin: 0;
      font-size: 14px;
      color: grey;
    }
  }
`;

export const NumberInfo = styled.div`
  margin: 16px;
  display: flex;
  justify-content: center;

  #phone {
    width: 30px;
    height: 30px;
  }

  p {
    padding: 0 16px;
  }

  button {
    display: flex;
    padding: 0;
    background-color: transparent;
    border: none;
    font-size: 13px;
    color: rgb(54, 158, 218);
    text-decoration: underline;
  }
`;

import styled from 'styled-components';
import { Container, Col } from 'react-bootstrap';

export const MessageContainer = styled(Container)`
  margin-top: 16px;
  border: 1px solid #d8d8d8;
  border-radius: 3px;
  min-height: 80vh;

  #message-container-row {
    height: 100vh;
  }
`;

export const InboxContainer = styled(Col)`
  padding: 0;
  border-right: 1px solid #d8d8d8;

  #inbox-text {
    display: flex;
    justify-content: center;
    padding: 10px;
    background-color: #ebeeef;
    h4 {
      font-weight: bold;
    }
  }

  #filters {
    font-size: 14px;
    padding: 8px 0 0 8px;
    color: grey;
    border-bottom: 1px solid #d8d8d8;
  }

  #all-chats {
    display: flex;
    font-size: 16px;
    padding: 0px;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    div {
      display: flex;
      justify-content: center;
      padding: 0 10px;
      @media (max-width: 992px) {
        font-size: 13px;
      }
    }

    img {
      margin: 40px;
      max-width: 100%;
      max-height: 100%;
      width: 150px;
    }
  }
`;

export const FilterContainers = styled.div`
  display: inline-block;

  div {
    padding: 4px 9px;
    margin-right: 8px;
    margin-bottom: 8px;
    background-color: #c8f8f6;
    color: black;
    display: inline-block;
    border-radius: 20px;
  }
`;

export const ShowMessagesContainer = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 576px) {
    display: none;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin: 40px;
      max-width: 100%;
      max-height: 100%;
      width: 250px;
    }
  }
`;

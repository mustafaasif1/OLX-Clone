import styled from 'styled-components';

export const LoginAndSell = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 16px;
`;

export const NotificationAndMessage = styled.div`
  display: flex;
  align-items: center;
  color: black;
  justify-content: center;

  #message-btn {
    margin: 0 5px;
    border-radius: 20px;
    padding: 8px 0px 5px 14px;
    cursor: pointer;

    :hover {
      background-color: #c8f8f6;
    }

    div {
      color: white;
      border: none;
      display: flex;
      padding: 0;
      align-items: center;
      justify-content: center;

      #chat {
        width: 25px;
        color: black;
      }

      div {
        font-size: 10px;
        font-weight: bold;
        background-color: dodgerblue;
        padding: 1px 5px;
        border-radius: 50px;
        position: relative;
        top: -8px;
        right: 35%;
      }
    }
  }
`;

export const ActionDiv = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  #the-icons {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

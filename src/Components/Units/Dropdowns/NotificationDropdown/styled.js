import styled from 'styled-components';
import { Dropdown } from 'react-bootstrap';

export const NotificationDropDownContainer = styled(Dropdown)`
  #notification-dropdown {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 5px;
    border-radius: 20px;
    padding: 8px 0px 5px 14px;

    #notification {
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

    :after {
      display: none;
    }

    :hover {
      background-color: #c8f8f6;
    }
  }
`;

export const NofificationItem = styled.div`
  width: 180px;
  padding: 5px 10px;
  display: flex;
  img {
    width: 30px;
    height: 30px;
  }
  #notication-text {
    padding: 0 8px;
    font-size: 14px;
    line-height: 16px;
    div {
    }
  }
  #time-period {
    margin: 10px 0 3px 0;
    color: grey;
    font-size: 12px;
  }
`;

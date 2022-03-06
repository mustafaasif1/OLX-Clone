import styled from 'styled-components';
import { Dropdown } from 'react-bootstrap';

export const IconDropdown = styled(Dropdown)`
  #dropdown-basic {
    background-color: transparent;
    border: none;
    color: black;

    img {
      width: 35px;
    }
  }

  #profile-menu {
    width: 280px;
  }
`;

export const ProfileItem = styled.div`
  #my-ads,
  #help,
  #settings,
  #logout {
    margin-right: 10px;
    width: 20px;
    height: 20px;
    font-weight: bold;
  }
`;

export const MainProfileItem = styled.div`
  display: flex;
  height: 80px;

  img {
    margin-right: 10px;
    width: 50px;
    height: 50px;
    font-weight: bold;
  }

  #inside-the-div {
    display: flex;
    flex-direction: column;
    width: 100%;

    p {
      margin: 0;
      font-size: 13px;
    }

    #name {
      white-space: pre-line;
      display: flex;
      font-size: 18px;
      font-weight: bold;
      word-break: break-word;
      min-height: 35px;
      flex-wrap: wrap;
      overflow: hidden;
      line-height: 20px;
    }

    #click-profile {
      font-size: 14px;
    }
  }
`;

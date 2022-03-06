import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { NotificationDropDownContainer, NofificationItem } from './styled';
import { ReactComponent as NotificationIcon } from '../../../../Assets/Icons/notification.svg';
import olxNotification from '../../../../Assets/Pictures/olxNotification.png';

export const NotificationDropdown = () => (
  <NotificationDropDownContainer>
    <Dropdown.Toggle id="notification-dropdown">
      <NotificationIcon id="notification" />
      <div>12</div>
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <NofificationItem>
        <img src={olxNotification} alt={olxNotification} />
        <div id="notication-text">
          <div>Your Ad has been expired!</div>
          <div id="time-period">1 week ago!</div>
        </div>
      </NofificationItem>

      <NofificationItem>
        <img src={olxNotification} alt={olxNotification} />
        <div id="notication-text">
          <div>Your Featured Ad has been expired!</div>
          <div id="time-period">3 week ago!</div>
        </div>
      </NofificationItem>
    </Dropdown.Menu>
  </NotificationDropDownContainer>
);

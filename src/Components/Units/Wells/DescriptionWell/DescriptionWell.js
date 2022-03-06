import React from 'react';
import { ReactComponent as PhoneIcon } from '../../../../Assets/Icons/phone.svg';
import { SellerContainer, NumberInfo, ContactDetails } from './styled';
import profilePicture from '../../../../Assets/Pictures/iconProfilepicture.png';
import { ChatWithSellerController } from '../../../Modals/Controllers/ChatWithSellerController';

export const DescriptionWell = () => (
  <SellerContainer>
    <h5>Seller Description</h5>
    <ContactDetails>
      <div>
        <img src={profilePicture} alt="Profile" />
      </div>
      <div id="InnerContact">
        <h6>Ibrahim</h6>
        <p>Member since Aug 2020</p>
      </div>
    </ContactDetails>
    <ChatWithSellerController />

    <NumberInfo>
      <PhoneIcon id="phone" />
      <p>** *** ***</p>
      <button
        type="button"
        onClick={() => {
          console.log('Show number clicked');
        }}
      >
        Show number
      </button>
    </NumberInfo>
  </SellerContainer>
);

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import { ReactComponent as MyAdsIcon } from '../../../../Assets/Icons/myAds.svg';
import { ReactComponent as HelpIcon } from '../../../../Assets/Icons/help.svg';
import { ReactComponent as SettingsIcon } from '../../../../Assets/Icons/settings.svg';
import { ReactComponent as LogoutIcon } from '../../../../Assets/Icons/logout.svg';
import { SignoutUser } from '../../../../Backend/Firebase';
import { selectUser } from '../../../../Redux/Features/userSlice';
import { IconDropdown, ProfileItem, MainProfileItem } from './styled';
import iconProfilepicture from '../../../../Assets/Pictures/iconProfilepicture.png';

export const ProfileDropDown = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <IconDropdown>
      <Dropdown.Toggle id="dropdown-basic">
        <img src={iconProfilepicture} alt="Icon Profile" />
      </Dropdown.Toggle>

      <Dropdown.Menu id="profile-menu" align="end">
        <Dropdown.Item href="/action-1">
          <MainProfileItem>
            <img src={iconProfilepicture} alt="Icon Profile" />
            <div id="inside-the-div">
              <p> Hello,</p>
              <div id="name">{!user ? 'Unknown User' : user.displayName}</div>
              <div id="click-profile">Click to view and edit profile</div>
            </div>
          </MainProfileItem>
        </Dropdown.Item>

        <Dropdown.Divider />
        <Dropdown.Item href="/action-1">
          <ProfileItem>
            <MyAdsIcon id="my-ads" />
            My Ads
          </ProfileItem>
        </Dropdown.Item>

        <Dropdown.Divider />
        <Dropdown.Item href="/action-1">
          <ProfileItem>
            <HelpIcon id="help" />
            Help
          </ProfileItem>
        </Dropdown.Item>
        <Dropdown.Item href="/action-1">
          <ProfileItem>
            <SettingsIcon id="settings" />
            Settings
          </ProfileItem>
        </Dropdown.Item>

        <Dropdown.Divider />
        <Dropdown.Item
          onClick={() => {
            SignoutUser(dispatch);
          }}
        >
          <ProfileItem>
            <LogoutIcon id="logout" />
            Logout
          </ProfileItem>
        </Dropdown.Item>
      </Dropdown.Menu>
    </IconDropdown>
  );
};

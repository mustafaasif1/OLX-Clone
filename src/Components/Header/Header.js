import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { ReactComponent as LogoIcon } from '../../Assets/Icons/logo.svg';
import { ReactComponent as ChatIcon } from '../../Assets/Icons/chat.svg';
import { LoginAndSell, NotificationAndMessage, ActionDiv } from './styled';
import { selectUser } from '../../Redux/Features/userSlice';
import { NavbarSearch } from '../Units/NavbarSearch/NavbarSearch';
import { NavbarDropdown } from '../Units/Dropdowns/NavbarDropdown/NavbarDropdown';
import { SellButton } from '../Units/Buttons/SellButton/SellButton';
import { ProfileDropDown } from '../Units/Dropdowns/ProfileDropdown/ProfileDropDown';
import { NotificationDropdown } from '../Units/Dropdowns/NotificationDropdown/NotificationDropdown';
import { LoginModalController } from '../Modals/Controllers/LoginModalController';

export const Header = () => {
  const user = useSelector(selectUser);

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <LogoIcon id="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavbarDropdown />
          <NavbarSearch />

          {!user ? (
            <LoginAndSell>
              <LoginModalController />
              <SellButton />
            </LoginAndSell>
          ) : (
            <ActionDiv>
              <div id="the-icons">
                <NotificationAndMessage>
                  <Link to="/Chat">
                    <div id="message-btn">
                      <div>
                        <ChatIcon id="chat" />
                        <div>2</div>
                      </div>
                    </div>
                  </Link>
                  <NotificationDropdown />
                </NotificationAndMessage>
                <ProfileDropDown />
              </div>
              <SellButton />
            </ActionDiv>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

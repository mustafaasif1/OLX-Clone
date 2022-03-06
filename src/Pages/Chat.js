import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Header } from '../Components/Header/Header';
import { BottomLinks } from '../Components/Units/BottomLinks/BottomLinks';
import { Messages } from '../Components/Messages/Messages';
import { selectUser } from '../Redux/Features/userSlice';
import { GlobalStyle } from '../Styles/GlobalStyles';
import { PAGES } from '../Constants/Constants';

const Chat = () => {
  const user = useSelector(selectUser);

  return !user ? (
    <Redirect to={PAGES.Home} />
  ) : (
    <>
      <Header />
      <BottomLinks />
      <Messages />
      <GlobalStyle />
    </>
  );
};

export default Chat;

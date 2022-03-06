import React from 'react';
import { Container } from 'react-bootstrap';
import { SubMenu, SubMenuLinks } from './styled';
import { MegaMenu } from '../MegaMenu/MegaMenu';

export const BottomLinks = () => (
  <SubMenu>
    <Container>
      <SubMenuLinks>
        <MegaMenu />
        <li>
          <a href="home">Mobile Phones</a>
        </li>
        <li>
          <a href="home">Cars</a>
        </li>
        <li>
          <a href="home">Motorcycles</a>
        </li>
        <li>
          <a href="home">Houses</a>
        </li>
        <li>
          <a href="home">Tv - Video - Audio</a>
        </li>
        <li>
          <a href="home">Tablets</a>
        </li>
        <li>
          <a href="home">Land & Plots</a>
        </li>
      </SubMenuLinks>
    </Container>
  </SubMenu>
);

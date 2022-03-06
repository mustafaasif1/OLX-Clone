import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FooterBackground, FooterLinks, Classified } from './styled';
import { ReactComponent as FacebookIcon } from '../../Assets/Icons/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../Assets/Icons/twitter.svg';
import { ReactComponent as InstagramIcon } from '../../Assets/Icons/instagram.svg';
import { ReactComponent as YoutubeIcon } from '../../Assets/Icons/youtube.svg';

export const Footer = () => (
  <>
    <FooterBackground>
      <Container>
        <Row>
          <Col>
            <FooterLinks>
              <h6>POPULAR CATEGORIES</h6>
              <div>
                <p>Cars</p>
                <p>Flats for rent</p>
                <p>Mobile Phones</p>
                <p>Jobs</p>
              </div>
            </FooterLinks>
          </Col>
          <Col>
            <FooterLinks>
              <h6>TRENDING SEARCHES</h6>
              <div>
                <p>Bikes</p>
                <p>Watches</p>
                <p>Books</p>
                <p>Dogs</p>
              </div>
            </FooterLinks>
          </Col>
          <Col>
            <FooterLinks>
              <h6>ABOUT US</h6>
              <div>
                <p>About EMPG</p>
                <p>OLX Blog</p>
                <p>Contact Us</p>
                <p>OLX for Businesses</p>
              </div>
            </FooterLinks>
          </Col>
          <Col>
            <FooterLinks>
              <h6>OLX</h6>
              <div>
                <p>Help</p>
                <p>Sitemap</p>
                <p>Legal and Privacy Information</p>
              </div>
            </FooterLinks>
          </Col>
          <Col>
            <FooterLinks>
              <h6>FOLLOW US</h6>
              <div>
                <FacebookIcon id="facebook" />
                <TwitterIcon id="twitter" />
                <InstagramIcon id="instagram" />
                <YoutubeIcon id="youtube" />
              </div>
            </FooterLinks>
          </Col>
        </Row>
      </Container>
    </FooterBackground>

    <Classified>
      Free Classifieds in Pakistan <span>.© 2006-2021 OLX</span>
    </Classified>
  </>
);

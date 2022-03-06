import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ReactComponent as AppStoreIcon } from '../../../Assets/Icons/appstore.svg';
import { ReactComponent as GooglePlayIcon } from '../../../Assets/Icons/googleplay.svg';
import bottomBannerImage from '../../../Assets/Pictures/olxApp.jpg';
import {
  BottomBanner,
  BottomBannerImageContainer,
  BottomBannerTextContainer,
  BottomBannerCTAContainer,
} from './styled';

export const HomepageBottomBanner = () => (
  <BottomBanner>
    <div>
      <Row>
        <Col sm>
          <BottomBannerImageContainer
            src={bottomBannerImage}
            alt="OLX Bottom Banner Image"
          />
        </Col>
        <BottomBannerTextContainer>
          <h3>TRY THE OLX APP</h3>
          <h5>
            Buy, sell and find just about anything using the app on your mobile
          </h5>
        </BottomBannerTextContainer>
        <BottomBannerCTAContainer>
          <div id="InnerDiv">
            <div id="TextDiv">GET YOUR APP TODAY</div>
            <div id="CTADiv">
              <AppStoreIcon id="appStore" />
              <GooglePlayIcon id="googlePlay" />
            </div>
          </div>
        </BottomBannerCTAContainer>
      </Row>
    </div>
  </BottomBanner>
);

import styled from 'styled-components';
import { Col } from 'react-bootstrap';

export const BottomBanner = styled.section`
  background: rgba(0, 47, 52, 0.03);

  div {
    margin: auto;
    width: 90%;
  }
`;

export const BottomBannerImageContainer = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const BottomBannerTextContainer = styled(Col)`
  @media (max-width: 992px) {
    padding: 20px 0;
    h3 {
      font-size: 20px;
    }
    h5 {
      font-size: 14px;
    }
  }
`;

export const BottomBannerCTAContainer = styled(Col)`
  #InnerDiv {
    border-left: 2px solid grey;
    margin: 16px;
    padding: 0 4px;

    #TextDiv {
      font-weight: bold;

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }

    #CTADiv {
      display: flex;
      justify-content: space-between;
      margin: 10px;

      @media (max-width: 992px) {
        flex-direction: column;
      }
    }

    #appStore,
    #googlePlay {
      width: 48%;
      padding: 2px;

      @media (max-width: 992px) {
        width: 80%;
      }
    }
  }
`;

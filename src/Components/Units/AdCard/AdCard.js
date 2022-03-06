import React from 'react';
import { Card } from 'react-bootstrap';
import { ReactComponent as HeartIcon } from '../../../Assets/Icons/heart.svg';
import adPicture from '../../../Assets/Pictures/plot5.jpeg';

import {
  ImageContainer,
  CustomImage,
  ImageIcon,
  ImageText,
  BodyContainer,
  CustomCardText,
  CardMetaInfo,
} from './styled';

export const AdCard = () => (
  <Card className="mb-3">
    <ImageContainer>
      <CustomImage src={adPicture} alt="Ad Picture" />
      <ImageText>FEATURED</ImageText>
      <ImageIcon>
        <HeartIcon id="heart" />
      </ImageIcon>
    </ImageContainer>
    <BodyContainer>
      <h6>Rs 4000</h6>
      <CustomCardText>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident. At
        vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
        praesentium voluptatum deleniti atque corrupti quos dolores et quas
        molestias excepturi sint occaecati cupiditate non provident.
      </CustomCardText>
      <CardMetaInfo>
        <div>GURJANWALA</div>
        <div>2 WEEKS AGO</div>
      </CardMetaInfo>
    </BodyContainer>
  </Card>
);

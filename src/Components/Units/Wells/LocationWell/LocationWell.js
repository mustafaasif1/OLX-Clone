import React from 'react';
import { MapCard, LocationContainer } from './styled';
import { ReactComponent as RightArrowIcon } from '../../../../Assets/Icons/rightArrow.svg';
import mapImage from '../../../../Assets/Pictures/map.png';

export const LocationWell = () => (
  <LocationContainer>
    <h5>Posted in</h5>
    <p>E-17, Islamabad, Islamabad Capital Territorys</p>
    <MapCard>
      <img src={mapImage} alt="Map" />
      <div>
        <p>See Location</p>
        <RightArrowIcon id="right-arrow" />
      </div>
    </MapCard>
  </LocationContainer>
);

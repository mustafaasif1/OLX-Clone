import React from 'react';
import {
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap';
import { ReactComponent as CurrentLocationIcon } from '../../../../Assets/Icons/currentLocation.svg';
import { ReactComponent as LocationIcon } from '../../../../Assets/Icons/location.svg';
import { LocationSelector, LocationItem } from './styled';

export const NavbarDropdown = () => (
  <LocationSelector>
    <InputGroup>
      <FormControl
        aria-label="Text input with dropdown button"
        placeholder="Search city, area or locality"
      />

      <DropdownButton
        variant="outline-secondary"
        id="input-group-dropdown-2"
        align="end"
        title=""
      >
        <Dropdown.Item href="#">
          <LocationItem>
            <h6>
              <CurrentLocationIcon id="currentLocation" />
              Use current location
            </h6>
          </LocationItem>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">
          <LocationItem>
            <LocationIcon id="location" />
            Azad Kashmir, Pakistan
          </LocationItem>
        </Dropdown.Item>
        <Dropdown.Item href="#">
          <LocationItem>
            <LocationIcon id="location" />
            Islamabad capital Territory, Pakistan
          </LocationItem>
        </Dropdown.Item>
        <Dropdown.Item href="#">
          <LocationItem>
            <LocationIcon id="location" />
            Northern Areas, Pakistan
          </LocationItem>
        </Dropdown.Item>
        <Dropdown.Item href="#">
          <LocationItem>
            <LocationIcon id="location" />
            Sindh, Pakistan
          </LocationItem>
        </Dropdown.Item>
        <Dropdown.Item href="#">
          <LocationItem>
            <LocationIcon id="location" />
            Punjab, Pakistan
          </LocationItem>
        </Dropdown.Item>
      </DropdownButton>
    </InputGroup>
  </LocationSelector>
);

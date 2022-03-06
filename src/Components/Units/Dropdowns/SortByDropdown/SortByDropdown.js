import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

function SortByDropdown() {
  return (
    <DropdownButton variant="secondary" id="filter-search" title="SORT BY:">
      <Dropdown.Item eventKey="1" active>
        Newly listed
      </Dropdown.Item>
      <Dropdown.Item eventKey="2">Most relevant</Dropdown.Item>
      <Dropdown.Item eventKey="3">Lowest price</Dropdown.Item>
      <Dropdown.Item eventKey="4">Highest price</Dropdown.Item>
    </DropdownButton>
  );
}

export default SortByDropdown;

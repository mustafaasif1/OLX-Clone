import React from 'react';
import { Form } from 'react-bootstrap';
import { ReactComponent as SearchIcon } from '../../../Assets/Icons/search.svg';
import { SearchForm, SearchButton } from './styled';

export const NavbarSearch = () => (
  <SearchForm>
    <Form.Control
      type="search"
      placeholder="Find Cars, Mobile Phones and more..."
    />
    <SearchButton>
      <SearchIcon id="search" />
    </SearchButton>
  </SearchForm>
);

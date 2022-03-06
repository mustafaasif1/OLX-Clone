import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export const SearchForm = styled(Form)`
  display: flex;
  flex: 1;
  border-radius: none;
  margin: 8px;

  @media (max-width: 992px) {
    width: 95%;
  }
}
`;

export const SearchButton = styled.button`
  background-color: #002f34;
  border-radius: 5px;
  color: white;
  border: none;
  width: 45px;

  :hover {
    background-color: #00464e;
  }
`;

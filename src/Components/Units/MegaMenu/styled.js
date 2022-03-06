import styled from 'styled-components';
import { Dropdown } from 'react-bootstrap';

export const CustomDropDownToggle = styled(Dropdown.Toggle)`
  border: none;
  font-weight: bold;
  font-size: 12px;
  margin-right: 12px;
`;

export const MegaMenuLinks = styled.div`
  padding-bottom: 30px;
  h6 {
    font-weight: bold;
  }
  div {
    padding: 0;
    border: none;
    a {
      display: block;
      font-size: 13px;

      :hover {
        color: rgb(15, 97, 26);
      }
    }
  }
`;

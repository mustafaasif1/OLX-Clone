import styled from 'styled-components';
import { FormControl, Navbar } from 'react-bootstrap';

export const FilterHeading = styled.div`
  p {
    font-weight: bold;
    padding: 0 8px;
  }
  @media (max-width: 992px) {
    display: none;
  }
`;

export const FilterButton = styled(Navbar.Toggle)`
  font-weight: bold;
  font-size: 18px;
  background-color: #002f34;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  #filter {
    margin-right: 6px;
    height: 25px;
    width: 25px;
    color: white;
  }

  div {
    color: white;
  }
`;

export const CategoriesContainer = styled.div`
  padding: 0 8px;

  .heading {
    font-weight: bold;
  }

  ul {
    list-style-type: none;
    font-size: 14px;

    li {
      padding: 4px 0;
    }
  }

  .first-ul {
    padding: 0;
  }

  .viewMore {
    color: dodgerblue;
  }

  #registeredViewMore {
    color: dodgerblue;
    margin: 12px 0;
  }
`;

export const InputNumber = styled(FormControl)`
  border-radius: 0px;
  margin: 0 4px;
  background-color: f5f5f5;
  border-bottom: 2px solid grey;
`;

export const CenterButtonContainer = styled.div`
  text-align: center;
  padding: 12px 0;
`;

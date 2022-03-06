import styled from 'styled-components';

export const PopularSearchesContainer = styled.ul`
  list-style-type: none;
  font-size: 14px;
  margin: 12px 0;
  display: flex;
  flex-wrap: wrap;
  padding: 0;

  @media (max-width: 992px) {
    font-size: 12px;
  }

  li {
    padding-right: 10px;

    div {
      font-weight: bold;
    }

    a {
      color: rgb(122, 122, 122);
    }

    :after {
      padding-left: 8px;
      color: rgb(122, 122, 122);
      content: '-';
    }

    :first-child::after {
      padding-left: 0;
      content: '';
    }

    :last-child::after {
      content: '';
    }
  }
`;

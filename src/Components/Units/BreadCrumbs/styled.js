import styled from 'styled-components';

export const BreadCrumbsContainer = styled.ul`
  list-style-type: none;
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;

  li {
    padding-right: 10px;

    :after {
      padding-left: 10px;
      color: rgb(122, 122, 122);
      content: '/';
    }

    a {
      color: rgb(122, 122, 122);
    }
  }

  @media (max-width: 992px) {
    font-size: 12px;
  }
`;

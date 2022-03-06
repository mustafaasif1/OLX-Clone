import styled from 'styled-components';

export const SubMenu = styled.section`
  box-shadow: 4px 10px 20px rgba(37, 37, 37, 0.082);
  padding: 16px 0;
`;

export const SubMenuLinks = styled.ul`
    list-style-type: none;
    font-size: 14px;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    align-items: center;
    padding: 0;

    li {
    padding-right: 20px;
    margin: 4px;

    a {
        color: rgb(56, 56, 56);

        :hover {
            color: rgb(15, 97, 26);
        }
    }
    }

    @media (max-width: 992px){
        font-size: 12px;
    }
    }
`;

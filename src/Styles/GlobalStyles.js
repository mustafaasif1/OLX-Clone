import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }
    a {
        text-decoration: none;
        color: black;
        cursor: pointer;
    }
    a:hover {
        color: rgb(0, 97, 0);
    }
`;

import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    html {
        font-size: 62.5%;
    }
    
    body {
        margin: 0;
        font-family: 'Montserrat-Regular', sans-serif;
        font-size: 1.6rem;
    }

    h1, h2, h3, h4, h5 {
        font-family: 'DarkerGrotesque-Bold', sans-serif;
        font-weight: normal;
    }

    h1 {
        font-size: 4.8rem;
    }

    h2 {
        font-size: 3.6rem;
    }

    h3 {
        font-size: 2.8rem;
    }
`;

export default GlobalStyle;

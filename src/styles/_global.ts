import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{         
        --font-display: 'Montserrat', 'Arial';

        --color-primary: #256DB1;
        --text-color-white: #FFFFFF;
        --background-color:  rgb(241, 241, 241);
        --color-blue-cyan-100: rgba(9, 25, 54, 0.65);
        --color-blue-cyan: rgb(9, 25, 54);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #__next {
        position: relative;
        min-height: 100%
    }

    //padrão da aplicação : 16px
    html {
        @media (max-width: 1080px){
            font-size: 93.75%; //calculo: 16px*0.9375 = 15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; //calculo 16px*.875 = 14px
        }
        height: 100%;
        min-height: 100%;
    }

    body {
        font-family: var(--font-display);
        background-color: var(--background-color);
        overflow-x: hidden;
        height: 100%;
        min-height: 100%;
    }
`;

import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    :root{         
        --font-display: 'Montserrat', 'Arial';

        --color-primary: #256DB1;
        --text-color-white: #FFFFFF;
        --background-color:  rgb(241, 241, 241);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    //padrão da aplicação : 16px
    html {
        @media (max-width: 1080px){
            font-size: 93.75%; //calculo: 16px*0.9375 = 15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; //calculo 16px*.875 = 14px
        }
    }

    body {
        font-family: var(--font-display);
        background-color: var(--background-color);
        overflow-x: hidden;
    }
`;
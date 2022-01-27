import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{         
        --font-display: 'Montserrat', 'Arial';

        --text-color-white: #FFFFFF;
        
        --color-primary: #256DB1;
        --color-blue-white: #2D6FE0;
        --color-danger: #c23f3b;
        --color-border-cyan: #BCBFC4;
        --color-title:  rgba(9,25,54,0.85);
        --color-blue-cyan: rgb(9, 25, 54);

        --background-color:  rgb(241, 241, 241);
        --color-blue-cyan-100: rgba(9, 25, 54, 0.65);
       
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

    .stars-avaliate {
      display: flex;
      align-items: flex-start;

      gap: 0.5rem;

      img {
        width: 1rem;
      }

      &.MovieView {
        margin-bottom: 1rem;
      }
    }

    .Toastify__toast-body {
        font-family: var(--font-display);
        color: var(--color-white-100);
        font-weight: 500;
        font-size: 1.1rem;
        line-height: 20px;
    }
`;

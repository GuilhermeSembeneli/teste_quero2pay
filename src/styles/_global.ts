import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{         
        --font-display: 'Montserrat', 'Arial';

        --text-color-white: #FFFFFF;
        
        --color-primary: #256DB1;
        --color-blue-white: #2D6FE0;
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
    }

`;

export const GlobalContainerSlider = styled.div`
  .slick-list,
  .slick-slider,
  .slick-track {
    position: relative;
    display: block;
  }
  .slick-loading .slick-slide,
  .slick-loading .slick-track {
    visibility: hidden;
  }
  .slick-slider {
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }
  .slick-list {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: 0;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }
  .slick-slider .slick-list,
  .slick-slider .slick-track {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  .slick-track {
    top: 0;
    left: 0;
  }
  .slick-track:after,
  .slick-track:before {
    display: table;
    content: "";
  }
  .slick-track:after {
    clear: both;
  }
  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
  }
  [dir="rtl"] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  } /*# sourceMappingURL=slick.min.css.map */
`;

export const SliderContainer = styled.div`
  display: flex !important;
  align-items: center;
  position: relative;

  .slick-list {
    flex: 1;
    z-index: 1;

    .slick-slide {
      & > * {
        padding: 10px 30px;
      }
    }
  }

  .slick-arrow {
    cursor: pointer;
    background-color: var(--color-blue-white);
    border-radius: 100%;
    border: none;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    width: 24px;
    box-shadow: none;
    text-shadow: none;
    transform: none;
    line-height: 0;
    position: absolute;
    z-index: 2;

    &.slick-disabled {
      opacity: 0.25;
      cursor: not-allowed;
    }

    &.slick-prev {
      transform: rotate(180deg);
      left: 0;
    }

    &.slick-next {
      right: 0;
    }
  }

  .slick-dots {
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 15px 0 0;
    position: absolute;
    bottom: -15px;
    display: flex !important;
    align-items: center;
    justify-content: center;
    gap: 5px;

    li {
      cursor: pointer;
      background-color: var(--color-blue-white);
      width: 4.5px;
      height: 4.5px;
      padding: 0;
      border-radius: 100%;
      border: 2px solid transparent;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      line-height: 0;
      box-shadow: 0 0.25em 0.5em 0 rgb(0 0 0 / 10%);
      margin: 0 0.25em;
      position: relative;
      opacity: 0.5;

      &.slick-active {
        opacity: 1;
      }

      button {
        background-color: transparent;
        color: transparent;
        border: 0;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
      }
    }
  }
`;

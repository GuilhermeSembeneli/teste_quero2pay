import styled from "styled-components";

export const MoviesBox = styled.div`
  cursor: pointer;
  position: relative;

  img {
    border-radius: 5px;
    width: 110px;
    height: 120px;
    object-fit: fill;
  }

  .about-more {
    position: absolute;
    bottom: 4px;

    width: 100%;
    padding: 0.3rem;

    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    transition: all 0.15s ease-in-out;

    text-align: center;
  }

  @media screen and (min-width: 980px) {
    img {
      width: 164px;
      height: 200px;
    }

    .about-more {
      opacity: 0;
    }

    &:hover,
    &:focus {
      .about-more {
        opacity: 1;
      }
    }
  }
`;

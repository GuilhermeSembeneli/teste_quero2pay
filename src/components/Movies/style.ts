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
    bottom: 5px;

    width: 100%;
    padding: 0.3rem;

    opacity: 0;
    background-color: rgba(0, 0, 0, 0.4);

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    transition: all 0.15s ease-in-out;

    p {
      text-align: center;
      color: var(--text-color-white);
      text-transform: uppercase;
      font-size: 0.9rem;
    }
  }

  &:hover {
    .about-more {
      opacity: 1;
    }
  }

  @media screen and (min-width: 980px) {
    img {
      width: 164px;
      height: 200px;
    }
  }
`;

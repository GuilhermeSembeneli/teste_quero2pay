import styled from "styled-components";

export const MoviesBox = styled.div`
  cursor: pointer;
  img {
    border-radius: 5px;
    width: 110px;
    height: 120px;
    object-fit: fill;
  }

  @media screen and (min-width: 980px) {
    img {
      width: 164px;
      height: 200px;
    }
  }
`;

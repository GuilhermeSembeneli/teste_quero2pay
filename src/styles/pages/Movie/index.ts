import styled from "styled-components";
import { Container, SectionHome } from "../Home";

export const ContainerMovie = styled(SectionHome)``;
export const ContainerPage = styled(Container)``;

export const ArticleInformation = styled.article`
  display: flex;
  flex-wrap: wrap-reverse;

  .movie-image {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
    img {
      border-radius: 15px;

      width: 100%;
      max-width: 550px;
      height: 300px;
    }
  }

  @media screen and (min-width: 980px) {
    justify-content: space-between;
    div:first-child {
      flex: 0 0 35%;
    }
    .movie-image {
      margin-bottom: 0;
      flex: 0 0 65%;
    }
  }
`;

export const TitleMovie = styled.p`
  font-size: 2rem;
  line-height: 2.75rem;
  color: var(--color-title);
  font-family: var(--font-display);
`;

export const DescriptionMovie = styled.p`
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 21px;
  color: var(--color-title);
  margin-bottom: 2rem;

  max-height: 250px;
  overflow: auto;
`;

export const ArticleYT = styled.article`
  margin-top: 2rem;
  iframe {
    margin-top: 0.5rem;
    width: 100%;
    min-height: 250px;
    border-radius: 15px;
    border: none;

    @media screen and (min-width: 980px) {
      min-height: 500px;
    }
  }
`;

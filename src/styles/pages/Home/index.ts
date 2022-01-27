import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`;

export const SectionHome = styled.section`
  margin: auto 0px;
  margin-top: 6rem;

  width: 90%;
  @media screen and (min-width: 1024px) {
    margin: 6rem 0 auto;
    max-width: 1038px;
    width: 90%;
  }
`;

export const AboutRent = styled.article`
  display: flex;
  justify-content: space-between;
  h4 {
    font-size: 2rem;
    line-height: 2.75rem;
    color: var(--color-title);
    font-family: var(--font-display);
  }

  p {
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 21px;
    color: var(--color-title);
    margin-bottom: 2rem;
  }
`;

export const MoviesList = styled.article`
  margin-top: 2rem;
  .create-title-decoration {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    p {
      font-weight: bold;
      font-size: 1.375rem;
      line-height: 2.063rem;
      color: var(--color-primary);
    }
    span {
      display: block;
      width: 3px;
      height: 1.25rem;
      border-radius: 4px;
      background: var(--color-primary);
    }
  }

  .container-movies-averages {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .container-all-movies {
    max-width: 1038px;
    margin: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

export const ContainerPagination = styled.div`
  display: flex;
  justify-content: flex-end;
`;

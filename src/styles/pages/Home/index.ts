import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SectionHome = styled.section`
  margin: auto 0px;
  margin-top: 6rem;
  
  width: 90%;
  @media screen and (min-width: 1024px) {
    margin: 3rem 0px auto;
    max-width: 1024px;
    width: 90%;
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
    max-width: 1024px;
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

export const ContainerPagination = styled.div`
  display: flex;
  justify-content: flex-end;
`;

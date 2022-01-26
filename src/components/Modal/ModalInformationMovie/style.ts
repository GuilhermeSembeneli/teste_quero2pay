import styled from "styled-components";

export const TitleMovie = styled.h3`
  font-weight: bold;
  font-size: 1.375rem;
  line-height: 2.063rem;
  color: var(--color-primary);
  text-align: center;
`;

export const HeaderMovie = styled.header`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DescriptionMovie = styled.p`
  font-size: 1rem;
  text-align: center;
  color: var(--color-blue-cyan);
`;

export const ContainerMovieModal = styled.main``;

export const FooterInformation = styled.footer`
  position: absolute;
  bottom: 15px;

  p {
    font-size: 1rem;
    text-align: center;
    color: var(--color-blue-cyan);
  }
`;
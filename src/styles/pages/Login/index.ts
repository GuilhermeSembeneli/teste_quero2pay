import styled from "styled-components";
import { Container, SectionHome } from "../Home";

export const ContainerLogin = styled(SectionHome)``;
export const ContainerPage = styled(Container)`
  form {
    max-width: 600px;
    margin: 0 auto;
  }
`;

export const ArticleLogin = styled.article``;

export const TitleLogin = styled.p`
  font-size: 2rem;
  line-height: 2.75rem;
  color: var(--color-title);
  font-family: var(--font-display);
  text-align: center;
`;

export const DescriptionLogin = styled.p`
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 21px;
  color: var(--color-title);
  margin-bottom: 2rem;

  text-align: center;
`;

export const ContainerFormLogin = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  justify-content: center;
`;

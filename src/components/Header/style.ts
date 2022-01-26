import styled from "styled-components";

export const ContainerHeader = styled.header`
  cursor: pointer;
  background-color: var(--color-primary);

  color: var(--text-color-white);
  padding: 1rem;
  position: fixed;
  width: 100%;
  overflow: hidden;
  top: 0px;
  z-index: 1000;

  section {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const QueroTwo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  h5 {
    font-size: 1.2rem;
    line-height: 1.581rem;
    font-weight: 400;
    text-transform: uppercase;
  }

  span {
    font-size: 1.8rem;
    margin-bottom: 0.3rem;
    font-weight: bold;
  }

  strong {
    font-size: 1.2rem;
    text-transform: uppercase;
  }
`;

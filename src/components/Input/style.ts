import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  input {
    border: none;
    padding: 7px 10px;
    border-radius: 5px;
    background: var(--background-color);
    font-family: var(--font-display);
    color: var(--color-primary);
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.688rem;
    outline: none;
    cursor: pointer;
    border: 1px solid var(--color-border-cyan);

    &::placeholder {
      color: var(--color-primary);
    }
  }
`;

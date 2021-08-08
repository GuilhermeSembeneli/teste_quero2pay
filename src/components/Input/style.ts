import styled from "styled-components";

export const ContainerInput = styled.div`
    input {
        border: none;
        padding: 7px 10px;
        border-radius: 5px;
        background: var(--text-color-white);
        font-family: var(--font-display);
        color: var(--color-primary);
        font-weight: 500;
        font-size: 1.125rem;
        line-height: 1.688rem;
        outline: none;
        cursor: pointer;

        &::placeholder {
            color: var(--color-primary)
        }

      
    }
`;
import styled, { css } from "styled-components";
import { ButtonProps } from "./interface";

export const ButtonStyle = styled.button<ButtonProps>`
  cursor: pointer;

  width: ${(props) => (props.maxWidth ? "100%" : "")};
  border: none;
  background-color: ${(props) =>
    props?.backgroundColor || "var(--color-blue-white)"};

  color: #ffffff;
  border-radius: 5px;

  padding: ${(props) =>
    `${props.top ? `${props.top}px` : "5px"} ${
      props.right ? `${props.right}px` : "15px"
    } ${props.bottom ? `${props.bottom}px` : "5px"} ${
      props.left ? `${props.left}px` : "15px"
    }`};

  font-size: 0.7rem;
  font-family: var(--font-display);
  font-weight: ${(props) => (props?.isBold ? "700" : "600")};

  letter-spacing: 0.04em;
  cursor: pointer;

  text-transform: uppercase;
  text-align: center;

  transition: all 0.3s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${(props) =>
    props?.white &&
    css`
      color: var(--color-blue-white);
      background-color: #ffffff;
      background-color: ${props?.backgroundColor || "#ffffff"};
      border: 1px solid var(--color-blue-white);
      box-shadow: none;

      &:hover {
        background-color: var(--color-blue-white);
        color: #ffffff;
      }
    `}

  ${(props) =>
    props?.customWidth &&
    css`
      width: 100%;
      max-width: ${props?.customWidth || ""};
    `}
`;

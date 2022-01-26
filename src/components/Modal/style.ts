import styled, { css } from "styled-components";
import { StyleModalProps } from "./interface";

export const ContainerModal = styled.div<StyleModalProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;

  display: flex;
  justify-content: center;

  background-color: var(--color-blue-cyan-100);
  padding: 0 15px;

  z-index: 1000;

  ${(props) =>
    props?.isCart &&
    css`
      justify-content: flex-end;
      align-items: flex-start;
      padding: 0;
      z-index: 1002;
    `}
`;

export const ModalContent = styled.div<StyleModalProps>`
  margin-top: 6rem;
  position: relative;
  background: white;
  width: 100%;
  max-width: 400px;
  min-height: 500px;
  height: 100%;
  border-radius: 15px;
  padding: 15px;

  overflow-y: auto;

  ${(props) =>
    props?.maxWidth === "md" &&
    css`
      border-radius: 5px;
      max-width: 600px;
      max-height: 894px;  
    `}
`;

export const ModalCartContent = styled.div`
  position: fixed;
`;

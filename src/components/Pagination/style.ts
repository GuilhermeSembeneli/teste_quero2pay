import styled, { css } from "styled-components";
import { PaginationPropsStyle } from "./interface";

export const ContainerPagination = styled.div`
  cursor: pointer;
`;

export const FlexPagination = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemsPagination = styled.div<PaginationPropsStyle>`
  padding: 4px 10px;

  border: 1px solid #e1e5e9;

  font-family: var(--font-family);
  font-style: normal;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.25rem;

  color: #3a3b3f;
  transition: all 0.3s ease;

  ${({ actived }) =>
    actived &&
    css`
      color: #ffffff;
      background: #109cf1;
      border: 1px solid #109cf1;
    `}

  ${({ hasBorderRight }) =>
    hasBorderRight &&
    css`
      border-radius: 4px 0px 0px 4px;
      transform: matrix(-1, 0, 0, 1, 0, 0);
    `}

  ${({ hasBorderLeft }) =>
    hasBorderLeft &&
    css`
      border-radius: 4px 0px 0px 4px;
    `}

  &:hover {
    opacity: 0.5;
  }
`;

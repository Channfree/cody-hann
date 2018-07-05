import { css } from 'emotion';

export const modalEnter = css`
  opacity: 0;
`;

export const modalEnterActive = css`
  opacity: 1;
  transition: opacity 700ms ease-in-out;
  z-index: 1;
`;

export const modalExit = css`
  opacity: 1;
`;

export const modalExitActive = css`
  opacity: 0;
  transition: opacity 700ms ease-in-out;
  z-index: 1;
`;

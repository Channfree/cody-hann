import { css } from 'emotion';

import * as colors from '../common/emotions';

export const appear = css`
  opacity: 0;
  z-index: 1;
`;

export const appearActive = css`
  opacity: 1;
  transition: opacity 700ms ease-in-out;
  z-index: 1;
`;

export const enter = css`
  opacity: 0;
  z-index: 1;
`;

export const enterActive = css`
  opacity: 1;
  transition: opacity 700ms ease-in-out;
  z-index: 1;
`;

export const exit = css`
  opacity: 1;
  z-index: -1;
`;

export const exitActive = css`
  opacity: 0;
  transition: opacity 700ms ease-in-out;
  z-index: -1;
  height: 0;
`;

export const insides = css`
  position: absolute;
  width: 100%;
`;

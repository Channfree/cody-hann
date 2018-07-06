import { css } from 'emotion';

import * as colors from '../../common/emotions';

export const background = css`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const close = css`
  background-color: transparent;
  border: none;
  padding: 2rem;
  position: absolute;
  right: 0;
  top: 0;

  path {
    transition: fill 200ms ease-in-out;
  }

  &:active,
  &:focus,
  &:hover {
    cursor: pointer;

    path {
      ${colors.fillSkyBlue(1)};
    }
  }
`;

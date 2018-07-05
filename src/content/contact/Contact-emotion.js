import { css } from 'emotion';

import * as colors from '../../common/emotions';

export const contact = css`
  align-items: center;
  ${colors.colorFrothyWaters(1)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 3rem);
`;

export const links = css`
  display: grid;

  & a {
    align-items: center;
    display: flex;
    transition: color 200ms ease-in-out;

    & path {
      transition: fill 200ms ease-in-out;
    }

    &:active,
    &:focus,
    &:hover {
      ${colors.colorSkyBlue(1)};

      & path {
        ${colors.fillSkyBlue(1)};
      }
    }
  }

  & .svg {
    width: 4rem;
  }
`;

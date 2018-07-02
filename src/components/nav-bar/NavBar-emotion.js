import { css } from 'emotion';

import * as colors from '../../common/emotions';

export const navBar = css`
  align-items: center;
  ${colors.bgDeepWater(1)};
  display: flex;
  justify-content: flex-end;

  & a {
    ${colors.colorFrothyWaters(1)};
    font-size: 1rem;
    font-weight: bold;
    line-height: 2rem;
    padding: 0.5rem 2rem;
    transition: color 200ms ease-in-out;

    &.active {
      ${colors.colorSkyBlue(1)};
    }

    &:active,
    &:focus,
    &:hover {
      ${colors.colorSkyBlue(1)};
    }
  }
`;

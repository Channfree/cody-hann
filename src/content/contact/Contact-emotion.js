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
  column-gap: 3rem;
  display: grid;
  grid-template-columns: 12rem 12rem 12rem;
  grid-template-rows: auto;
  row-gap: 2rem;

  @media (max-width: 779px) {
    column-gap: 2rem;
    grid-template-columns: 12rem 12rem;
    grid-template-rows: 12rem 12rem 12rem;
    row-gap: 1.5rem;
  }

  & a {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 5rem;
    padding-top: 3rem;
    position: relative;
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

  span {
    position: absolute;
    bottom: 2.5rem;
  }
`;

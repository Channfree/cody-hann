import { css } from 'emotion';

import * as colors from '../../common/emotions';

export const thumbnails = css`
  column-gap: 2rem;
  display: grid;
  grid-template-columns: 18.75rem 18.75rem 18.75rem;
  row-gap: 2rem;

  @media (max-width: 1079px) {
    grid-template-columns: 18.75rem 18.75rem;
  }

  @media (max-width: 779px) {
    grid-template-columns: auto;
  }
`;

export const work = css`
  align-items: center;
  ${colors.colorFrothyWaters(1)};
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  overflow-y: auto;
`;

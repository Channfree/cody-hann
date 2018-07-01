import { css } from 'emotion';
import * as colors from '../../common/emotions';

export const sky = css`
  ${colors.bgSkyBlue(1)};
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 5rem;
    font-weight: bold;
    ${colors.colorDeepWater(1)};
    margin: 0;
  }
`;

export const sea = css`
  ${colors.bgBlueWaters(1)};
  height: 20rem;
`;

export const deepSea = css`
  ${colors.bgDeepWater(1)};
  height: 20rem;
`;

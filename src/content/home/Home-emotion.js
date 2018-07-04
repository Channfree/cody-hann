import { css } from 'emotion';
import * as colors from '../../common/emotions';

export const sky = css`
  align-items: center;
  ${colors.bgSkyBlue(1)};
  height: calc(100vh - 3rem);
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 1px;
  position: relative;

  h1 {
    font-size: 5rem;
    font-weight: bold;
    ${colors.colorDeepWater(1)};
    margin: 0;
  }
`;

export const layer = css`
  bottom: 0;
  left: 0;
`;

export const sea = css`
  border: 1rem solid black;
  ${colors.bgBlueWaters(1)};
  height: 20rem;
  ${layer};
  width: 100%;
  position: absolute;
  transform: translateZ(0);
`;

export const higherSea = css`
  border: 1rem solid black;
  ${colors.bgBlueWaters(1)};
  height: 30rem;
  ${layer};
  width: 100%;
  position: absolute;
  transform: translateZ(-1px) scale(2);
`;

export const deepSea = css`
  ${colors.bgDeepWater(1)};
  height: 200rem;
  position: absolute;
  transform: translateZ(0);
`;

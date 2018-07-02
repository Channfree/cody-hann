import { css } from 'emotion';

import * as colors from '../../common/emotions';

export const animations = css`
  width: 600px;
  height: 400px;
`;

export const work = css`
  align-items: center;
  ${colors.colorFrothyWaters(1)};
  display: flex;
  justify-content: center;
  height: calc(100vh - 3rem);
`;

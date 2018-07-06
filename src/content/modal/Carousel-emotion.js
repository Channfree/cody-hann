import { css } from 'emotion';

import * as colors from '../../common/emotions';

export const carouselContainer = css`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;

  .slider-list {
    .slider-slide {
      align-items: center !important;
      display: flex !important;
    }
  }

  .slider-control-bottomcenter {
    position: fixed !important;

    button {
      ${colors.colorFrothyWaters(1, true)};
    }
  }
`;

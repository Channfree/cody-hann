import { css } from 'emotion';
import * as colors from '../../common/emotions';

const numLayers = 3;
const perspective = 100;

export const parallax = css`
  height: calc(100vh - 3rem);
  perspective: ${100}px;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
`;

const getLayer = layer => {
  const translateZ = (layer - numLayers + 1) * perspective;
  const scale = 1 + (translateZ * -1) / perspective;

  return css`
    position: absolute;
    transform: translateZ(${translateZ}px) scale(${scale});
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `;
};

const group = css`
  height: calc(100vh - 3rem);
  position: relative;
  transform-style: preserve-3d;
`;
// transform: translate3d(700px, 0, -800px) rotateY(30deg);

export const parallaxLayer0 = css`
  align-items: center;
  border: 0.5rem solid orange;
  display: flex;
  font-size: 5rem;
  font-weight: bold;
  ${getLayer(0)};
  justify-content: center;
  height: 100%;
  margin: 0;
`;

export const parallaxLayer1 = css`
  border: 0.5rem solid green;
  bottom: 0;
  ${getLayer(1)};
`;

export const parallaxLayer2 = css`
  border: 0.5rem solid yellow;
  bottom: 0;
  ${getLayer(2)};
`;

export const group0 = css`
  ${group};
  z-index: 20;
`;
// z-index: -1;

export const group1 = css`
  ${group};
  z-index 10;
`;

export const deepSea = css`
  border: 0.5rem solid red;
  ${colors.bgDeepWater(1)};
  height: 200rem;
  position: absolute;
  width: 100%;
`;

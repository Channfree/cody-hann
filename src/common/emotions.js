import { css } from 'emotion';

export const bgSkyBlue = (opacity, important) => css`
  background-color: rgba(127, 205, 255, ${opacity})
    ${important ? '!important' : ''};
`;
export const bgMurkyWater = (opacity, important) => css`
  background-color: rgba(118, 182, 196, ${opacity})
    ${important ? '!important' : ''};
`;
export const bgDeepWater = (opacity, important) => css`
  background-color: rgba(6, 66, 115, ${opacity})
    ${important ? '!important' : ''};
`;
export const bgBlueWaters = (opacity, important) => css`
  background-color: rgba(29, 162, 216, ${opacity})
    ${important ? '!important' : ''};
`;
export const bgFrothyWaters = (opacity, important) => css`
  background-color: rgba(222, 243, 246, ${opacity})
    ${important ? '!important' : ''};
`;

export const colorSkyBlue = (opacity, important) => css`
  color: rgba(127, 205, 255, ${opacity}) ${important ? '!important' : ''};
`;
export const colorMurkyWater = (opacity, important) => css`
  color: rgba(118, 182, 196, ${opacity}) ${important ? '!important' : ''};
`;
export const colorDeepWater = (opacity, important) => css`
  color: rgba(6, 66, 115, ${opacity}) ${important ? '!important' : ''};
`;
export const colorBlueWaters = (opacity, important) => css`
  color: rgba(29, 162, 216, ${opacity}) ${important ? '!important' : ''};
`;
export const colorFrothyWaters = (opacity, important) => css`
  color: rgba(222, 243, 246, ${opacity}) ${important ? '!important' : ''};
`;

export const fillSkyBlue = (opacity, important) => css`
  fill: rgba(127, 205, 255, ${opacity}) ${important ? '!important' : ''};
`;
export const fillMurkyWater = (opacity, important) => css`
  fill: rgba(118, 182, 196, ${opacity}) ${important ? '!important' : ''};
`;
export const fillDeepWater = (opacity, important) => css`
  fill: rgba(6, 66, 115, ${opacity}) ${important ? '!important' : ''};
`;
export const fillBlueWaters = (opacity, important) => css`
  fill: rgba(29, 162, 216, ${opacity}) ${important ? '!important' : ''};
`;
export const fillFrothyWaters = (opacity, important) => css`
  fill: rgba(222, 243, 246, ${opacity}) ${important ? '!important' : ''};
`;

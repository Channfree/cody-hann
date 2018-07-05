import * as React from 'react';

import SVG from './SVG';

const Mail = ({ color = '#def3f6', width = '30px' }) => (
  <SVG width={width} viewBox="0 0 30 20">
    <path
      d="M24.1 2H5.9l9.1 9 9.1-9zM28 2L15 14 2 2v16h26V2zm2 18H0V0h30v20z"
      fill={color}
      fillRule="nonzero"
    />
  </SVG>
);

export default Mail;

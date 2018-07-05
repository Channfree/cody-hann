import * as React from 'react';

import SVG from './SVG';

const Instagram = ({ color = '#def3f6', width = '30px' }) => (
  <SVG width={width} viewBox="0 0 30 30">
    <path
      fill={color}
      d="M0 0v5l10 10L0 25v5h5l10-10 10 10h5v-5L20 15 30 5V0h-5L15 10 5 0z"
      fillRule="evenodd"
    />
  </SVG>
);

export default Instagram;

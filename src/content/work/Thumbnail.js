import * as React from 'react';

import { BASE_URL } from '../../common/urls';

import { overlay, thumbnail } from './Thumbnail-emotion';

const Thumbnail = ({ animation: { prefix }, index, showModal }) => {
  const backgroundImageUrl = `${BASE_URL}/${prefix}thumbnail`;

  return (
    <button
      className={thumbnail(backgroundImageUrl)}
      onClick={() => showModal(index)}
    >
      <span className={overlay} />
    </button>
  );
};

export default Thumbnail;

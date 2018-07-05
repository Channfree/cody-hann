import * as React from 'react';

import { withConsumer } from '../../context/Context';
import Thumbnail from './Thumbnail';

import { thumbnails, work } from './Work-emotion';

const Work = ({ animations, showModal }) => (
  <div className={work}>
    <div className={thumbnails}>
      {animations.map((animation, i) => (
        <Thumbnail
          animation={animation}
          index={i}
          key={animation.name}
          showModal={showModal}
        />
      ))}
    </div>
  </div>
);

export default withConsumer(Work);

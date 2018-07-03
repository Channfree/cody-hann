import * as React from 'react';

import { withConsumer } from '../../context/Context';
import Animation from './Animation';

import { animations, work } from './Work-emotion';

const Work = ({ animations }) => (
  <div className={work}>
    <div className={animations}>
      {animations.map(animation => (
        <Animation animation={animation} key={animation.name} />
      ))}
    </div>
  </div>
);

export default withConsumer(Work);

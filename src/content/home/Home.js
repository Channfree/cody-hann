import * as React from 'react';

import {
  deepSea,
  group0,
  group1,
  parallax,
  parallaxLayer0,
  parallaxLayer1,
  parallaxLayer2,
} from './Home-emotion';

const Home = () => (
  <div className={parallax}>
    <div className={group0}>
      <h1 className={parallaxLayer0}>Cody Hann</h1>
      <div className={parallaxLayer1} />
      <div className={parallaxLayer2} />
    </div>
    <div className={group1}>
      <div className={deepSea} />
    </div>
  </div>
);

export default Home;

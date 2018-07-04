import * as React from 'react';

import { deepSea, sea, sky, higherSea } from './Home-emotion';

const Home = () => (
  <React.Fragment>
    <div className={sky}>
      <h1>Cody Hann</h1>
      <div className={sea} />
      <div className={higherSea} />
      <div className={deepSea} />
    </div>
  </React.Fragment>
);

export default Home;

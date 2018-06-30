import * as React from 'react';

import { deepSea, sea, sky } from './Home-emotion';

const Home = () => (
  <div>
    <div className={sky}>
      <h1>Cody Hann</h1>
    </div>
    <div className={sea} />
    <div className={deepSea} />
  </div>
);

export default Home;

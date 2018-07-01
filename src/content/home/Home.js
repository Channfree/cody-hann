import * as React from 'react';

import { deepSea, sea, sky } from './Home-emotion';

const Home = () => (
  <React.Fragment>
    <div className={sky}>
      <h1>Cody Hann</h1>
    </div>
    <div className={sea} />
    <div className={deepSea} />
  </React.Fragment>
);

export default Home;

import * as React from 'react';

import { withProvider } from '../context/Context';
import NavBar from '../components/nav-bar/NavBar';
import Content from '../content/Content';

const App = () => (
  <React.Fragment>
    <NavBar />
    <Content />
  </React.Fragment>
);

export default withProvider(App);

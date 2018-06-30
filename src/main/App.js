import * as React from 'react';

import NavBar from '../components/nav-bar/NavBar';
import Content from '../content/Content';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Content />
      </React.Fragment>
    );
  }
}

export default App;

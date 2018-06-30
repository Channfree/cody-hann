import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';

import App from './App';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));

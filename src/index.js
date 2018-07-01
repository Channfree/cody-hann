import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';

import * as colors from './common/emotions';
import Router from './router/Router';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    ${colors.bgDeepWater(1)};
    font-family: 'Poppins', sans-serif;
    margin: 0;
  }
`;

ReactDOM.render(<Router />, document.getElementById('root'));

import * as React from 'react';

import SVG from './SVG';

const Youtube = ({ color = '#def3f6', width = '43' }) => (
  <SVG width={width} viewBox="0 0 43 30">
    <g fill={color} fillRule="evenodd">
      <path
        d="M21.38735.25472s13.29015.00004 16.61913.91105c1.80871.46853 3.2502 1.8999 3.72205 3.69589.91747 3.30564.89127 10.1774.89127 10.1774s-.00002 6.84568-.89127 10.12533c-.47184 1.822-1.91334 3.22738-3.72205 3.72193-3.32898.85895-16.61913.85896-16.61913.85896s-13.23763-.00003-16.5929-.885c-1.8087-.49456-3.25023-1.92597-3.74828-3.72193C.18114 21.88473.18112 15.01302.18112 15.01302s.00002-6.84572.86505-10.15136c.49805-1.79599 1.9658-3.25343 3.74828-3.74797C8.1235.25474 21.38735.25472 21.38735.25472zm.092 1.39786s-12.27684.00001-15.35817.77769C4.47133 2.878 3.11281 4.19754 2.65182 5.82358c-.80066 2.99285-.80068 9.19079-.80068 9.19079s.00002 6.22147.80068 9.16721c.461 1.62602 1.79525 2.92198 3.46936 3.36974 3.10559.80123 15.35818.80126 15.35818.80126s12.30119 0 15.38245-.77769c1.67412-.44774 3.00835-1.72014 3.44508-3.36973.82493-2.96931.82495-9.16721.82495-9.16721s.02425-6.22152-.82495-9.21437c-.43673-1.62604-1.77096-2.92197-3.44508-3.34616-3.08126-.8248-15.38245-.82484-15.38245-.82484z"
        fillRule="nonzero"
      />
      <path d="M17.167 8.68815l11.03585 6.32487L17.167 21.31185V8.68815z" />
    </g>
  </SVG>
);

export default Youtube;

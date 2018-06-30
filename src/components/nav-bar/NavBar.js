import * as React from 'react';

import Link from '../link/Link';

import { navBar } from './NavBar-emotion';

const NavBar = () => (
  <nav className={navBar}>
    <Link isRouterLink to="/">
      Home
    </Link>
    <Link isRouterLink to="/work">
      Work
    </Link>
    <Link isRouterLink to="/contact">
      Contact
    </Link>
  </nav>
);

export default NavBar;

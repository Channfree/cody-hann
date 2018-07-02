import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { cx } from 'emotion';

import Link from '../link/Link';

import { navBar } from './NavBar-emotion';

const home = '/';
const work = '/work';
const contact = '/contact';

const NavBar = ({ location: { pathname } }) => (
  <nav className={navBar}>
    <Link className={cx({ active: pathname === home })} isRouterLink to={home}>
      Home
    </Link>
    <Link className={cx({ active: pathname === work })} isRouterLink to={work}>
      Work
    </Link>
    <Link
      className={cx({ active: pathname === contact })}
      isRouterLink
      to={contact}
    >
      Contact
    </Link>
  </nav>
);

export default withRouter(NavBar);

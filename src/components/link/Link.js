import * as React from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import { cx } from 'emotion';

import { link } from './Link-emotion';

const onClick = (e, pathname, to) => {
  if (pathname === to) {
    e.preventDefault();
  }
};

const Link = ({
  children,
  className,
  isRouterLink,
  location,
  noTarget,
  staticContext,
  ...rest
}) =>
  isRouterLink ? (
    <RouterLink
      className={cx(link, className)}
      onClick={e => onClick(e, location.pathname, rest.to)}
      {...rest}
    >
      {children}
    </RouterLink>
  ) : (
    <a
      className={cx(link, className)}
      target={noTarget ? '' : '_blank'}
      {...rest}
    >
      {children}
    </a>
  );

export default withRouter(Link);

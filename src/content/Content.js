import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Home from './home/Home';
import Contact from './contact/Contact';
import Work from './work/Work';

import {
  insides,
  appear,
  appearActive,
  enter,
  enterActive,
  exit,
  exitActive,
} from './Content-emotion';

const ContentInsides = ({ children }) => (
  <div className={insides}>{children}</div>
);

const Content = ({ location }) => (
  <TransitionGroup>
    <CSSTransition
      appear
      key={location.key}
      classNames={{
        appear,
        appearActive,
        enter,
        enterActive,
        exit,
        exitActive,
      }}
      timeout={1500}
    >
      <Switch location={location}>
        <Route
          exact
          path="/"
          render={() => (
            <ContentInsides>
              <Home />
            </ContentInsides>
          )}
        />
        <Route
          path="/work"
          render={() => (
            <ContentInsides>
              <Work />
            </ContentInsides>
          )}
        />
        <Route
          path="/contact"
          render={() => (
            <ContentInsides>
              <Contact />
            </ContentInsides>
          )}
        />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
);

export default withRouter(Content);

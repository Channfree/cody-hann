import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Home from './home/Home';
import Contact from './contact/Contact';
import Work from './work/Work';

const Content = ({ location }) => (
  <Switch location={location}>
    <Route exact path="/" component={Home} />
    <Route path="/work" component={Work} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default withRouter(Content);

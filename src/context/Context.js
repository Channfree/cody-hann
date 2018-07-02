import * as React from 'react';
import axios from 'axios';
import { keys, zip } from 'ramda';
import { get } from 'object-path';

import { BASE_URL } from '../common/urls';

const Context = React.createContext();

const withProvider = WrappedComponent =>
  class extends React.Component {
    state = {
      animations: [],
    };

    async componentDidMount() {
      try {
        const {
          data: { prefixes },
        } = await axios.get('/spine-animations');

        const manifest = prefixes.map(prefix => {
          const name = prefix.split('/')[2];

          return {
            atlas: `${name}.atlas`,
            json: `${name}.json`,
            name,
            prefix,
          };
        });

        const animations = await Promise.all(
          manifest.map(({ json, prefix }) =>
            axios.get(`${BASE_URL}/${prefix}${json}`)
          )
        );

        const newState = {
          animations: zip(manifest, animations).map(([m, a]) => {
            const animationNames = keys(get(a, 'data.animations'));
            const randomNumber = Math.floor(
              Math.random() * animationNames.length
            );

            return {
              ...m,
              animationName: animationNames[randomNumber],
            };
          }),
        };

        this.setState(newState);
      } catch (e) {
        console.error(e);
      }
    }

    render() {
      return (
        <Context.Provider value={this.state}>
          <WrappedComponent />
        </Context.Provider>
      );
    }
  };

const withConsumer = WrappedComponent =>
  class extends React.Component {
    render() {
      return (
        <Context.Consumer>
          {context => <WrappedComponent {...this.props} {...context} />}
        </Context.Consumer>
      );
    }
  };

export { withConsumer, withProvider };

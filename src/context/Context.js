import * as React from 'react';
import axios from 'axios';
import { keys, zip } from 'ramda';
import { get } from 'object-path';

import { BASE_URL } from '../common/urls';

const Context = React.createContext();

const withProvider = WrappedComponent =>
  class AnimationProvider extends React.Component {
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

        const getJsonContent = Promise.all(
          manifest.map(({ json, prefix }) =>
            axios.get(`${BASE_URL}/${prefix}${json}`)
          )
        );
        const getAtlasContent = Promise.all(
          manifest.map(({ atlas, prefix }) =>
            axios.get(`${BASE_URL}/${prefix}${atlas}`)
          )
        );
        const [jsonContent, atlasContent] = await Promise.all([
          getJsonContent,
          getAtlasContent,
        ]);

        const jsonAndAtlasContent = zip(jsonContent, atlasContent).map(
          ([json, atlas]) => ({
            jsonContent: json.data,
            atlasContent: atlas.data,
          })
        );

        const newState = {
          animations: zip(manifest, jsonAndAtlasContent).map(
            ([m, contents]) => {
              const animationNames = keys(
                get(contents.jsonContent, 'animations')
              );
              const randomNumber = Math.floor(
                Math.random() * animationNames.length
              );

              return {
                ...m,
                ...contents,
                animationName: animationNames[randomNumber],
              };
            }
          ),
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

const withConsumer = WrappedComponent => (props = {}) => (
  <Context.Consumer>
    {context => <WrappedComponent {...props} {...context} />}
  </Context.Consumer>
);

export { withConsumer, withProvider };

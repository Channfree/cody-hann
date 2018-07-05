import * as React from 'react';
import Mousetrap from 'mousetrap';

class ModalEscape extends React.Component {
  componentDidMount() {
    Mousetrap.bind(
      'esc',
      () => {
        this.props.onKeyEscape();
      },
      'keyup'
    );
  }
  render() {
    return this.props.children;
  }
}

export default ModalEscape;

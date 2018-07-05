import * as React from 'react';
import { CSSTransition } from 'react-transition-group';

import { withProvider } from '../context/Context';
import NavBar from '../components/nav-bar/NavBar';
import Content from '../content/Content';
import Modal from '../components/modal/Modal';

import {
  modalEnter,
  modalEnterActive,
  modalExit,
  modalExitActive,
} from './App-emotion';

class App extends React.Component {
  state = {
    isModalVisible: false,
    modalStartingIndex: 0,
  };

  hideModal = () => {
    this.setState({ isModalVisible: false });
  };

  showModal = modalStartingIndex => {
    this.setState({ isModalVisible: true, modalStartingIndex });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Content showModal={this.showModal} />
        <CSSTransition
          classNames={{
            enter: modalEnter,
            enterActive: modalEnterActive,
            exit: modalExit,
            exitActive: modalExitActive,
          }}
          in={this.state.isModalVisible}
          timeout={700}
          unmountOnExit
        >
          {() => (
            <Modal
              hideModal={this.hideModal}
              startingIndex={this.state.modalStartingIndex}
            />
          )}
        </CSSTransition>
      </React.Fragment>
    );
  }
}

export default withProvider(App);

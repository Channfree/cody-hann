import * as React from 'react';
import { CSSTransition } from 'react-transition-group';

import { withProvider } from '../context/Context';
import NavBar from '../components/nav-bar/NavBar';
import Content from '../content/Content';
import Modal from '../content/modal/Modal';
import ModalEscape from './ModalEscape';

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
      <ModalEscape onKeyEscape={this.hideModal}>
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
      </ModalEscape>
    );
  }
}

export default withProvider(App);

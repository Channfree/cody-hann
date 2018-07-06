import * as React from 'react';

import Carousel from './Carousel';
import Close from '../../components/svg/Close';

import { background, close } from './Modal-emotion';

const Modal = ({ hideModal, startingIndex }) => (
  <div className={background}>
    <Carousel startingIndex={startingIndex} />
    <button className={close} onClick={hideModal}>
      <Close />
    </button>
  </div>
);

export default Modal;

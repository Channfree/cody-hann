import * as React from 'react';

import { withConsumer } from '../../context/Context';
import Animation from '../animation/Animation';
import Close from '../svg/Close';

import { background, close } from './Modal-emotion';

const Modal = ({ animations, hideModal, startingIndex }) => (
  <div className={background}>
    <Animation animation={animations[startingIndex]} />
    <button className={close} onClick={hideModal}>
      <Close />
    </button>
  </div>
);

export default withConsumer(Modal);

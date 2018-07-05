import * as React from 'react';

import { BASE_URL } from '../../common/urls';

import { animation } from './Animation-emotion';

class Animation extends React.Component {
  componentDidMount() {
    this.createSpineWidget(this.props.animation);
  }

  widget;

  createSpineWidget = ({ animationName, atlas, json, name, prefix }) => {
    this.widget = new spine.SpineWidget(name, {
      json: `${BASE_URL}/${prefix}${json}`,
      atlas: `${BASE_URL}/${prefix}${atlas}`,
      animation: animationName,
      backgroundColor: '#00000000',
      success: widget => {
        let animIndex = 0;
        widget.canvas.onclick = e => {
          e.stopPropagation();
          animIndex++;
          let animations = widget.skeleton.data.animations;
          if (animIndex >= animations.length) animIndex = 0;
          widget.setAnimation(animations[animIndex].name);
        };
      },
    });
  };

  render() {
    const { name } = this.props.animation;

    return <div className={animation} id={name} />;
  }
}

export default Animation;

import * as React from 'react';

import { BASE_URL } from '../../common/urls';

import { animation } from './Animation-emotion';

class Animation extends React.Component {
  componentDidMount() {
    this.createSpineWidget(this.props.animation);
  }

  widget;

  createSpineWidget = ({
    animationName,
    atlasContent,
    jsonContent,
    name,
    prefix,
  }) => {
    this.widget = new Promise((resolve, reject) => {
      new spine.SpineWidget(name, {
        animation: animationName,
        imagesPath: `${BASE_URL}/${prefix}`,
        jsonContent,
        atlasContent,
        backgroundColor: '#00000000',
        error: () => reject(),
        success: widget => {
          let animIndex = 0;
          widget.canvas.onclick = e => {
            e.stopPropagation();
            animIndex++;
            let animations = widget.skeleton.data.animations;
            if (animIndex >= animations.length) animIndex = 0;
            widget.setAnimation(animations[animIndex].name);
          };
          resolve(widget);
        },
      });
    }).catch(console.error);
  };

  render() {
    const { name } = this.props.animation;

    return <div className={animation} id={name} />;
  }
}

export default Animation;

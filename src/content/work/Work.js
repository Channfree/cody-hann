import * as React from 'react';
import { equals } from 'ramda';

import { withConsumer } from '../../context/Context';
import { BASE_URL } from '../../common/urls';

import { animation, animations, work } from './Work-emotion';

class Work extends React.Component {
  componentDidMount() {
    this.props.animations.forEach(this.createSpineWidget);
  }

  componentDidUpdate(prevProps) {
    this.props.animations.forEach(this.createSpineWidget);
  }

  shouldComponentUpdate(nextProps) {
    if (equals(nextProps, this.props)) {
      return false;
    }

    return true;
  }

  createSpineWidget = ({ animationName, atlas, json, name, prefix }) => {
    new spine.SpineWidget(name, {
      json: `${BASE_URL}/${prefix}${json}`,
      atlas: `${BASE_URL}/${prefix}${atlas}`,
      animation: animationName,
      backgroundColor: '#064273',
      success: widget => {
        let animIndex = 0;
        widget.canvas.onclick = function() {
          animIndex++;
          let animations = widget.skeleton.data.animations;
          if (animIndex >= animations.length) animIndex = 0;
          widget.setAnimation(animations[animIndex].name);
        };
      },
    });
  };

  renderAnimations = animations => {
    return animations.map(({ name }) => (
      <div className={animation} id={name} key={name} />
    ));
  };

  render() {
    return (
      <div className={work}>
        <div className={animations}>
          {this.renderAnimations(this.props.animations)}
        </div>
      </div>
    );
  }
}

export default withConsumer(Work);

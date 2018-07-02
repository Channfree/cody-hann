import * as React from 'react';

import { withConsumer } from '../../context/Context';

import { animations, work } from './Work-emotion';

class Work extends React.Component {
  componentDidUpdate(prevProps) {
    prevProps.animations.forEach(
      ({ animationName, atlas, json, name, prefix }) => {
        new spine.SpineWidget(name, {
          json: `https://storage.googleapis.com/resounding-axe-193803.appspot.com/${prefix}${json}`,
          atlas: `https://storage.googleapis.com/resounding-axe-193803.appspot.com/${prefix}${atlas}`,
          animation: animationName,
          backgroundColor: '#000000',
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
      }
    );
  }

  renderAnimations = animations => {
    return animations.map(({ name }) => <div id={name} key={name} />);
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

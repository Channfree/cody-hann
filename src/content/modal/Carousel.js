import * as React from 'react';
import NukaCarousel from 'nuka-carousel';

import Animation from '../../components/animation/Animation';
import { withConsumer } from '../../context/Context';

import { carouselContainer } from './Carousel-emotion';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slideIndex: props.startingIndex,
    };
  }

  afterSlide = slideIndex => this.setState({ slideIndex });

  render() {
    const { animations } = this.props;

    return (
      <div className={carouselContainer}>
        <NukaCarousel
          afterSlide={this.afterSlide}
          slideIndex={this.state.slideIndex}
          wrapAround
        >
          {animations.map(animation => (
            <Animation animation={animation} key={animation.name} />
          ))}
        </NukaCarousel>
      </div>
    );
  }
}
export default withConsumer(Carousel);

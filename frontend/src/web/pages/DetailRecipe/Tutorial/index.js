import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Container from '../../../components/Page/Container';
import Slide from './Slide';
import ArrowNext from './ArrowNext';
import ArrowPrev from './ArrowPrev';
import Wrapper from './Wrapper';

// eslint-disable-next-line react/prefer-stateless-function
class Tutorial extends React.PureComponent {
  state = {
    itemWidth: 0,
    indicatorWidth: 0,
    currentIndex: 1,
  };

  componentDidMount() {
    const { tutorials } = this.props;
    const itemWidth = 100 / tutorials.length;

    this.setState({
      itemWidth,
      indicatorWidth: itemWidth,
    });
  }

  componentWillReceiveProps(nextProps) {
    const { tutorials } = nextProps;
    const itemWidth = 100 / tutorials.length;

    this.setState({
      itemWidth,
      indicatorWidth: itemWidth,
      currentIndex: 1,
    });
  }

  render() {
    const { tutorials, recipe } = this.props;

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <ArrowNext />,
      prevArrow: <ArrowPrev />,
      beforeChange: (currentSlide, nextSlide) => {
        const { itemWidth } = this.state;
        const indicatorWidth = (nextSlide + 1) * itemWidth;
        this.setState({
          indicatorWidth,
          currentIndex: nextSlide + 1,
        });
      },
    };
    const total = tutorials.length;

    return (
      <Wrapper className="_section--tutorial">
        <Container>
          <div className="_tutorial--inner">
            <div className="_slider">
              <Slider {...settings}>
                {tutorials.map((item, index) => (
                  <Slide
                    key={`item-${item.id}`}
                    step={`Step ${item.step}`}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    isLast={tutorials.length - (index + 1) === 0}
                    recipe={recipe}
                  />
                ))}
              </Slider>
            </div>
            <div className="_indicator">
              <div className="_indicator--info">{`${
                this.state.currentIndex
              } dari ${total} langkah`}</div>
              <div className="_indicator--main">
                <div className="_bar" />
                <div className="_active" style={{ width: `${this.state.indicatorWidth}%` }} />
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    );
  }
}

Tutorial.propTypes = {
  tutorials: PropTypes.array.isRequired,
  recipe: PropTypes.object,
};

export default Tutorial;

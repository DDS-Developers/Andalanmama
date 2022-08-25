/* eslint-disable no-return-assign */
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Text from '../../../components/Text';
import Slide from './Slide';
import CardButton from '../../../components/CardButton';
import Wrapper from './Wrapper';
import ArrowNext from './ArrowNext';
import ArrowPrev from './ArrowPrev';

// eslint-disable-next-line react/prefer-stateless-function
class ArticleSliders extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider,
      nav2: this.sliderThumb,
    });
  }

  trimCharacters(text, maxLength) {
    const dots = text.length > maxLength;
    let character = text;
    if (dots) {
      character = text.substr(0, maxLength);
      character = text.substr(0, Math.min(text.length, text.lastIndexOf(' ')));
    }
    return dots ? `${character}...` : character;
  }

  render() {
    const { articles } = this.props;
    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: this.state.nav2,
      ref: slider => (this.slider = slider),
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            nextArrow: <ArrowNext />,
            prevArrow: <ArrowPrev />,
          },
        },
      ],
    };
    const settingsThumb = {
      dots: false,
      speed: 500,
      slidesToShow: 3,
      arrows: false,
      focusOnSelect: true,
      asNavFor: this.state.nav1,
      ref: slider => (this.sliderThumb = slider),
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Wrapper className="_section--slider">
        <div className="_slider--inner">
          <div className="_slider">
            <Slider {...settings}>
              {articles.map(item => (
                <Slide
                  key={`item-${item.id}`}
                  title={item.title}
                  user={item.user.fullname}
                  time={item.created_at}
                  permalink={`/article/detail/${item.slug}`}
                  image={item.image}
                />
              ))}
            </Slider>
          </div>
          <div className="_indicator--wrapper">
            <Text className="_info--text" size={600}>
              Sorotan
            </Text>
          </div>
          <div className="_slider--thumb">
            <Slider {...settingsThumb}>
              {articles.map(item => (
                <CardButton
                  key={`item-${item.id}`}
                  onClick={() => {}}
                  title={this.trimCharacters(item.title, 30)}
                  image={item.image}
                  meta={`oleh ${item.user.fullname}`}
                />
              ))}
            </Slider>
          </div>
        </div>
      </Wrapper>
    );
  }
}

ArticleSliders.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default ArticleSliders;

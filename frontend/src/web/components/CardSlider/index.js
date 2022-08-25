import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { ArrowForward } from '@material-ui/icons';

import Link from '../Link';
import Text from '../Text';
import Card from '../CardThumbnail';
import Wrapper from './Wrapper';
import SliderWrapper from './SliderWrapper';
import SlideWrapper from './SlideWrapper';
import ButtonWrapper from './ButtonWrapper';
import ArrowNext from './ArrowNext';
import ArrowPrev from './ArrowPrev';

// eslint-disable-next-line react/prefer-stateless-function
class CardSlider extends React.Component {
  renderButton = () => {
    const { favoriteButton } = this.props;
    const { title, permalink } = favoriteButton;

    return (
      <ButtonWrapper>
        <Link
          to={permalink}
          icon={ArrowForward}
          iconPosition="right"
          iconProps={{ size: '14px', marginLeft: '10px' }}
          color="#000000"
          hoverColor="#444444"
          activeColor="#666666"
        >
          <Text as="span" size={300}>
            {title}
          </Text>
        </Link>
      </ButtonWrapper>
    );
  };

  render() {
    const { items, favoriteButton, sliderSetting, ...others } = this.props;
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <ArrowNext />,
      prevArrow: <ArrowPrev />,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
          },
        },
      ],
      ...sliderSetting,
    };

    return (
      <Wrapper {...others}>
        {favoriteButton ? this.renderButton() : null}
        <SliderWrapper>
          <Slider {...settings}>
            {items.map(item => (
              <SlideWrapper key={`item-${item.id}`}>
                <Card
                  title={item.title}
                  permalink={item.permalink}
                  image={item.image}
                  user={item.user}
                  time={item.time}
                />
              </SlideWrapper>
            ))}
          </Slider>
        </SliderWrapper>
      </Wrapper>
    );
  }
}

CardSlider.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      permalink: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    }),
  ),
  favoriteButton: PropTypes.shape({
    title: PropTypes.string.isRequired,
    permalink: PropTypes.string.isRequired,
  }),
  sliderSetting: PropTypes.object,
};

export default CardSlider;

/* eslint-disable no-return-assign */
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
// import CardVideo from '../../../components/CardVideo';
// import CardButton from '../../../components/CardButton';
import MainWrapper from './MainWrapper';
import NavItem from './NavItem';
import Wrapper from './Wrapper';
import Title from '../../../components/Title';
import TitleWrapper from './TitleWrapper';
import ContentSLider from './ContentSlider';
import ArrowNext from './ArrowNext';
import ArrowPrev from './ArrowPrev';

class VideoMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.sliderMain,
      nav2: this.sliderThumbnail,
    });
  }

  render() {
    const { recipebook } = this.props;
    const items = recipebook.map(item => ({
      id: item.id,
      title: item.title,
      recipes: item.recipes,
      user: item.user.fullname,
    }));

    const settingsRecipebook = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: this.state.nav2,
      ref: slider => (this.sliderMain = slider),
    };

    const settingsThumbnail = {
      dots: false,
      speed: 500,
      slidesToShow: 3,
      arrows: false,
      focusOnSelect: true,
      asNavFor: this.state.nav1,
      ref: slider => (this.sliderThumbnail = slider),
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

    const OnAfterChange = index => {
      console.log(index);
    };

    return (
      <Wrapper className="_section--video">
        <MainWrapper className="_section--video--main">
          <Slider {...settingsRecipebook}>
            {/* <div> */}
            {items.map(item => (
              <div key={`item-${item.id}`}>
                <TitleWrapper>
                  <Title className="_info--title" size={400} color="primary">
                    {item.title} oleh {item.user}
                  </Title>
                </TitleWrapper>
                <ContentSLider recipes={item.recipes} />
              </div>
            ))}
          </Slider>
          <div className="_collections">
            <div className="_collections--nav">
              <Slider {...settingsThumbnail} afterChange={OnAfterChange}>
                {items.map(item => (
                  <NavItem
                    key={`item-${item.id}`}
                    title={item.title}
                    user={item.user}
                    onClick={() => {}}
                    images={item.recipes}
                  />
                ))}
              </Slider>
              <div className="slider-index">1 of {items.length}</div>
            </div>
          </div>
        </MainWrapper>
      </Wrapper>
    );
  }
}

VideoMain.propTypes = {
  recipebook: PropTypes.array.isRequired,
};

export default VideoMain;

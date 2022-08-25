import React from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';
import { Twitter, Facebook, Whatsapp } from 'react-social-sharing';
import Title from '../../../components/Title';
import Text from '../../../components/Text';
import SlideWrapper from './SlideWrapper';

const Slide = props => {
  const { title, description, image, isLast, recipe } = props;

  const htmlToReactParser = new Parser();
  const descEl = htmlToReactParser.parse(description);

  return (
    <SlideWrapper className="_slide">
      <div className="_inner">
        <div className="_info">
          {/* <Text as="div" className="_info--text">
            {step}
          </Text> */}
          <Title className="_info--title" size={300} color="primary">
            {title}
          </Title>
          <Text as="div" className="_info--text">
            {descEl}
          </Text>
          {isLast && (
            <React.Fragment>
              <Twitter solid small message={decodeURI(recipe.name)} link={window.location.href} />
              <Facebook solid small link={encodeURI(window.location.href)} />
              <Whatsapp solid small message={decodeURI(recipe.name)} link={window.location.href} />
            </React.Fragment>
          )}
        </div>
        <div className="_image">
          <img src={image} loading="lazy" alt="" />
        </div>
      </div>
    </SlideWrapper>
  );
};

Slide.propTypes = {
  // step: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isLast: PropTypes.bool,
  recipe: PropTypes.object,
};

export default Slide;

import React from 'react';
import PropTypes from 'prop-types';
import { Link as Route } from 'react-router-dom';
import Text from '../Text';
import Title from '../Title';
import ImageWrapper from './ImageWrapper';
import TitleWrapper from './TitleWrapper';
import InfoWrapper from './InfoWrapper';
import MetaWrapper from './MetaWrapper';
import Wrapper from './Wrapper';

// const CardButton = props => {
// eslint-disable-next-line react/prefer-stateless-function
class CardButton extends React.Component {
  renderContent() {
    const { image, title, meta } = this.props;
    return (
      <React.Fragment>
        <InfoWrapper className="info-wrapper">
          <TitleWrapper>
            <Title size={200} marginBottom="0">
              {title}
            </Title>
          </TitleWrapper>
          <MetaWrapper>
            <Text>{meta}</Text>
          </MetaWrapper>
        </InfoWrapper>
        <ImageWrapper className="image-wrapper">
          <img src={image} loading="lazy" alt="" />
        </ImageWrapper>
      </React.Fragment>
    );
  }

  render() {
    const { permalink, onClick, column, ...others } = this.props;
    return (
      <Wrapper column={column} {...others}>
        {onClick ? (
          <button
            className="_button-link"
            type="button"
            onClick={evt => {
              evt.preventDefault();
              onClick();
            }}
          >
            {this.renderContent()}
          </button>
        ) : (
          <Route className="_button-link" to={permalink}>
            {this.renderContent()}
          </Route>
        )}
      </Wrapper>
    );
  }
}

CardButton.propTypes = {
  column: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  meta: PropTypes.string.isRequired,
  permalink: PropTypes.string,
  onClick: PropTypes.func,
};

export default CardButton;

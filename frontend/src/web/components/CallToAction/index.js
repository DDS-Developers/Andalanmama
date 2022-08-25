import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';
import Text from '../Text';
import Wrapper from './Wrapper';

// eslint-disable-next-line react/prefer-stateless-function
class CallToAction extends React.Component {
  render() {
    const {
      title,
      description,
      ButtonAction,
      InfoMeta,
      titleProps,
      descProps,
      actionProps,
      metaProps,
      ...others
    } = this.props;
    return (
      <Wrapper {...others}>
        <Title
          tagName="h1"
          className="_title"
          size={400}
          color="primary"
          marginBottom="30px"
          {...titleProps}
        >
          {title}
        </Title>
        <Text className="_desc" marginBottom="25px" {...descProps}>
          {description}
        </Text>
        {InfoMeta ? (
          <div className="_meta" {...metaProps}>
            <InfoMeta />
          </div>
        ) : null}
        {ButtonAction ? (
          <div className="_action" {...actionProps}>
            <ButtonAction />
          </div>
        ) : null}
      </Wrapper>
    );
  }
}

CallToAction.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ButtonAction: PropTypes.func,
  InfoMeta: PropTypes.func,
  titleProps: PropTypes.object,
  descProps: PropTypes.object,
  actionProps: PropTypes.object,
  metaProps: PropTypes.object,
};

export default CallToAction;

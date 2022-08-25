/**
 * ButtonLike/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Text } from 'native-base';

const ButtonLike = props => {
  if (props.status !== 0) {
    return (
      <Button
        iconLeft
        light
        style={{
          borderRadius: 6,
          paddingTop: 0,
          paddingBottom: 0,
          height: 32,
          backgroundColor: props.liked ? '#E83249' : '#D2D2D2',
          elevation: 0,
          marginRight: 10,
        }}
        onPress={event => props.handler(event)}
      >
        <Icon
          type="FontAwesome"
          name="thumbs-o-up"
          style={{
            marginRight: 0,
            marginLeft: 10,
            color: props.liked ? '#FFFFFF' : '#000000',
            fontSize: 20,
          }}
        />
        <Text
          style={{
            textTransform: 'lowercase',
            paddingLeft: 5,
            paddingRight: 10,
            color: props.liked ? '#FFFFFF' : '#000000',
          }}
        >
          {props.likeCount} Suka
        </Text>
      </Button>
    );
  }
  return (
    <Button
      iconLeft
      light
      style={{
        borderRadius: 6,
        paddingTop: 0,
        paddingBottom: 0,
        height: 32,
        backgroundColor: '#D2D2D2',
        elevation: 0,
        marginRight: 10,
      }}
    >
      <Icon
        type="FontAwesome"
        name="thumbs-o-up"
        style={{ marginRight: 0, marginLeft: 10, color: props.liked ? '#FFFFFF' : '#000000' }}
      />
      <Text
        style={{
          textTransform: 'lowercase',
          paddingLeft: 5,
          paddingRight: 10,
          color: props.liked ? '#FFFFFF' : '#000000',
        }}
      >
        {props.likeCount} Suka
      </Text>
    </Button>
  );
};

ButtonLike.propTypes = {
  handler: PropTypes.func,
  likeCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  status: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  liked: PropTypes.bool,
};
export default ButtonLike;

/**
 * ButtonComment/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text, Icon } from 'native-base';

const ButtonComment = props => {
  const { navigation, label, icon, target, total, recipeId } = props;
  return (
    <Button
      light
      style={{
        borderRadius: 6,
        paddingTop: 0,
        paddingBottom: 0,
        height: 32,
        backgroundColor: '#D2D2D2',
        elevation: 0,
      }}
      onPress={() => navigation.navigate(target, { id: recipeId })}
    >
      <Icon
        type="MaterialIcons"
        name={icon}
        style={{ marginRight: 0, marginLeft: 10, color: '#000000', fontSize: 18 }}
      />
      <Text
        style={{
          textTransform: 'capitalize',
          paddingLeft: 5,
          paddingRight: 10,
          color: '#000000',
        }}
      >
        {total} {label}
      </Text>
    </Button>
  );
};

ButtonComment.propTypes = {
  navigation: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  total: PropTypes.number,
  recipeId: PropTypes.number,
};

export default ButtonComment;

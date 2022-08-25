/**
 * components/FieldRadio/index.js
 *
 */
// import React, { useState } from 'react';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'native-base';
import RadioWrapper from './RadioWrapper';
import RadioList from './RadioList';
import TextLeft from './TextLeft';
import RadioIcon from './RadioIcon';
import CheckedIcon from './CheckedIcon';

class FieldRadio extends PureComponent {
  onPress = option => () => {
    this.props.onChange && this.props.onChange(option.value);
  };

  render() {
    const { options, value } = this.props;
    const optionsLength = options.length;
    return (
      <RadioWrapper>
        {options.map((option, i) => (
          <RadioList
            button
            style={{ borderBottomWidth: optionsLength === i + 1 ? 0 : 0.5 }}
            key={option.value}
            onPress={this.onPress(option)}
          >
            <TextLeft>
              <Text style={{ fontSize: 14 }}>{option.label}</Text>
              <Text style={{ fontSize: 9, color: 'rgba(0, 0, 0, 0.6)' }}>{option.time}</Text>
            </TextLeft>
            <RadioIcon>{value === option.value ? <CheckedIcon /> : null}</RadioIcon>
          </RadioList>
        ))}
      </RadioWrapper>
    );
  }
}

FieldRadio.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func,
};

export default FieldRadio;

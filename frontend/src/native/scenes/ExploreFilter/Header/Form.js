/**
 * scenes/ExploreFilter/Header/Form.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Icon } from 'native-base';
import { withSearch } from '../../../providers/Search';
import Form from './FormWrapper';
import Input from './InputWrapper';
import SearchLabel from './SearchLabelWrapper';

export class HeaderForm extends PureComponent {
  state = {
    inputShow: false,
    inputFocus: true,
  };

  keywordInput = null;

  static getDerivedStateFromProps(props) {
    if (props.keyword !== '') {
      return {
        inputFocus: false,
      };
    }

    return null;
  }

  render() {
    const { keyword } = this.props;

    return (
      <Form>
        {keyword !== '' || this.state.inputShow ? (
          <Input
            ref={input => {
              this.keywordInput = input;
            }}
            placeholder="Pencarian"
            placeholderTextColor={'rgba(0,0,0,0.5)'}
            autoCapitalize="none"
            autoFocus={this.state.inputFocus}
            value={keyword}
            onChangeText={value => this.props.setKeyword(value)}
            returnKeyLabel="search"
            keywordType="web-search"
            returnKeyType="search"
            onBlur={() => {
              if (keyword === '') {
                this.setState({ inputShow: false });
              }
            }}
            onSubmitEditing={() => this.props.handler()}
          />
        ) : (
          <SearchLabel
            onPress={() => {
              this.setState({ inputShow: true });
            }}
          >
            <Icon
              type="MaterialIcons"
              name="search"
              style={{ marginLeft: 0, marginRight: 0, color: 'rgba(0,0,0,0.5)', fontSize: 20 }}
            />
            <Text style={{ color: 'rgba(0,0,0,0.5)', fontSize: 15 }}>Pencarian</Text>
          </SearchLabel>
        )}
      </Form>
    );
  }
}

HeaderForm.propTypes = {
  keyword: PropTypes.string,
  setKeyword: PropTypes.func,
  handler: PropTypes.func.isRequired,
};

export default withSearch(HeaderForm);

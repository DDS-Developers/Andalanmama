/**
 * scenes/Explore/FilterCategory/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextInput, TouchableOpacity, FlatList } from 'react-native';
import { View, Form } from 'native-base';

import { withFilter } from '../../../../providers/Filter';
import Text from '../../../../components/Text';
import List from './List';

export class InputTags extends PureComponent {
  state = {
    keyword: '',
    items: [],
    hideSuggestion: true,
  };

  componentDidMount() {
    this.props.loadCategories();
  }

  findTag = keyword => {
    const { categories } = this.props;
    let items = [];
    if (keyword !== '') {
      this.setState({ hideSuggestion: false });

      const tags = categories.toArray();
      // Making a case insensitive regular expression to get similar value from the json
      const regex = new RegExp(`${keyword.trim()}`, 'i');
      // Return the filtered tag array according the query from the input
      items = tags.filter(tag => tag.get('name').search(regex) >= 0);
    }
    this.setState({
      keyword,
      items,
    });
  };

  selectedSuggestion = item => {
    this.setState({
      hideSuggestion: true,
      items: [],
      keyword: '',
    });
    this.props.addSelectedCategory(item);
  };

  renderSuggestionItem = ({ item }) => (
    <View
      style={{
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
      }}
    >
      <TouchableOpacity onPress={() => this.selectedSuggestion(item)}>
        <Text>{item.get('name')}</Text>
      </TouchableOpacity>
    </View>
  );

  renderSuggestionList = () => {
    const { items } = this.state;

    return (
      <View
        style={{
          position: 'absolute',
          top: 42,
          left: 20,
          right: 20,
          zIndex: 99,
          maxHeight: 200,
          overflow: 'hidden',
        }}
      >
        <FlatList
          data={items}
          contentContainerStyle={{
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#dddddd',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
          renderItem={this.renderSuggestionItem}
          keyExtractor={item => `tag-${item.get('id')}`}
        />
      </View>
    );
  };

  renderForm = () => {
    const { selectedCategories } = this.props;
    const maxSelected = 5;
    const count = selectedCategories.count();

    return (
      <Form
        style={{
          height: 42,
          lineHeight: 42,
          borderRadius: 50,
          paddingLeft: 15,
          paddingRight: 52,
          backgroundColor: '#efefef',
        }}
      >
        <TextInput
          ref={input => {
            this.keywordInput = input;
          }}
          autoCapitalize="none"
          value={this.state.keyword}
          onChangeText={value => this.findTag(value)}
          returnKeyLabel="search"
          keywordType="web-search"
          returnKeyType="search"
          style={{
            width: '100%',
          }}
          placeholder={
            count < maxSelected
              ? 'Masukkan kata kunci'
              : 'Tag yang sudah kamu pilih sudah mencapai batas.'
          }
          editable={count < maxSelected}
        />
      </Form>
    );
  };

  render() {
    return (
      <View style={{ marginBottom: 30, flexDirection: 'column' }}>
        <View style={{ position: 'relative' }}>
          {this.renderForm()}
          {!this.state.hideSuggestion ? this.renderSuggestionList() : null}
        </View>
        <List />
      </View>
    );
  }
}

InputTags.propTypes = {
  loadCategories: PropTypes.func,
  addSelectedCategory: PropTypes.func,
  categories: PropTypes.object,
  selectedCategories: PropTypes.object,
};

export default withFilter(InputTags);

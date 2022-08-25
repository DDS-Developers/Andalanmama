/**
 * scenes/Explore/FilterCategory/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Keyboard, Dimensions } from 'react-native';
import { View, Spinner } from 'native-base';

import Content from '../../../components/Content';
import ListHelper from '../../../helpers/List';
import { withFilter } from '../../../providers/Filter';
import Text from '../../../components/Text';
import ButtonText from '../../../components/ButtonText';
import Paragraph from '../../../components/Paragraph';
import ButtonPrimary from '../../../components/ButtonPrimary';
import HeaderWrapper from './HeaderWrapper';
import TitleWrapper from './TitleWrapper';
import BoxWrapper from './BoxWrapper';
import Wrapper from './Wrapper';
import ListWrapper from './ListWrapper';
import Item from './Item';
import InputTags from './InputTags';

export class FilterCategory extends PureComponent {
  state = {
    lastSelected: {},
    keywordOpen: false,
    expandHeight: false,
  };

  componentDidMount() {
    this.setState({
      lastSelected: this.props.selectedCategories,
    });

    this.props.loadPopularCategories();

    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  calcMainBox = event => {
    const { layout } = event.nativeEvent;
    const { height } = layout;
    const windowHeight = Dimensions.get('window').height;
    if (height > windowHeight - 30) {
      this.setState({ expandHeight: true });
    }
  };

  keyboardDidShow = () => {
    this.setState({ keywordOpen: true });
  };

  keyboardDidHide = () => {
    this.setState({ keywordOpen: false });
  };

  onSelectCategory = item => {
    const { selectedCategories } = this.props;
    const id = item.get('id');

    const active = ListHelper.isItemExists(id, selectedCategories);
    if (active) {
      this.props.removeSelectedCategory(id);
    } else {
      this.props.addSelectedCategory(item);
    }
  };

  renderHeader = () => (
    <HeaderWrapper>
      <ButtonText
        textStyles={{ fontSize: 12 }}
        onPress={() => {
          this.props.setFilterDialog(false);
          this.props.setSelectedCategories(this.state.lastSelected);
        }}
      >
        Kembali
      </ButtonText>
      <TitleWrapper>
        <Text size={400}>Filter</Text>
      </TitleWrapper>
      <ButtonText textStyles={{ fontSize: 12 }} onPress={() => this.props.resetFilterSelected()}>
        Atur Ulang
      </ButtonText>
    </HeaderWrapper>
  );

  renderList = () => {
    const { popularCategories, selectedCategories } = this.props;

    return (
      <ListWrapper>
        {popularCategories.map(item => (
          <Item
            key={`category-${item.get('id')}`}
            image={item.get('image')}
            title={item.get('name')}
            active={ListHelper.isItemExists(item.get('id'), selectedCategories)}
            onSelect={() => this.onSelectCategory(item)}
          />
        ))}
      </ListWrapper>
    );
  };

  renderMain = () => (
    <Content nospace clean style={{ paddingRight: 24 }}>
      <Paragraph style={{ marginBottom: 15 }}>Masukkan Bahan-bahan (maks 5)</Paragraph>
      <InputTags />
      <Paragraph style={{ marginBottom: 15 }}>Resep Bahan Terpopuler</Paragraph>
      {this.renderList()}
      <View>
        <ButtonPrimary
          style={{ width: '100%', justifyContent: 'center' }}
          onPress={this.props.onSubmit}
        >
          Filter Sekarang
        </ButtonPrimary>
      </View>
    </Content>
  );

  renderLoading = () => <Spinner color="#888888" />;

  render() {
    const { filterDialog, filterLoading } = this.props;

    if (filterDialog) {
      return (
        <Wrapper toTop={this.state.keywordOpen || this.state.expandHeight}>
          <BoxWrapper toTop={this.state.expandHeight} onLayout={this.calcMainBox}>
            <View style={{ marginBottom: 25, paddingRight: 24 }}>{this.renderHeader()}</View>
            {filterLoading ? this.renderLoading() : this.renderMain()}
          </BoxWrapper>
        </Wrapper>
      );
    }

    return null;
  }
}

FilterCategory.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  popularCategories: PropTypes.object,
  selectedCategories: PropTypes.object,
  loadPopularCategories: PropTypes.func,
  setSelectedCategories: PropTypes.func,
  addSelectedCategory: PropTypes.func,
  removeSelectedCategory: PropTypes.func,
  filterDialog: PropTypes.bool,
  filterLoading: PropTypes.bool,
  setFilterDialog: PropTypes.func,
  resetFilterSelected: PropTypes.func,
};

export default withFilter(FilterCategory);

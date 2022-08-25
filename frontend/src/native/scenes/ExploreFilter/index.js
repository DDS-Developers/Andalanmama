/**
 * scenes/ExploreFilter/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Image } from 'react-native';
import { Container, View } from 'native-base';
import { withFilter } from '../../providers/Filter';
import List, { withList } from '../../containers/List';
import Content from '../../components/Content';
import Loader from '../../components/Loader';
import Paragraph from '../../components/Paragraph';
import EmptyWrapper from '../MyRecipe/EmptyWrapper';
import ListWrapper from '../MyRecipe/ListWrapper';
import IconCooking from '../../images/icon-cooking.png';
import Header from './Header';
import FilterCategory from './FilterCategory';
import RecipeItem from './RecipeItem';

export class ExploreFilterScene extends PureComponent {
  static navigationOptions = {
    title: 'Explore',
    header: null,
  };

  state = {
    tags: '',
  };

  componentDidMount() {
    this.props.loadResult();

    // Get Tags
    const tags = [];
    let tagsString = '';
    this.props.selectedCategories.forEach(item => {
      tags.push(item.get('name'));
    });

    if (tags.length > 0) {
      tagsString = tags.join(', ');
    }

    this.setState({
      tags: tagsString,
    });
  }

  renderList = () => (
    <ListWrapper>
      {this.props.listItems.map(item => (
        <RecipeItem key={`recipe-${item.get('id')}`} recipe={item} tags={this.state.tags} />
      ))}
    </ListWrapper>
  );

  renderEmpty = () => (
    <EmptyWrapper>
      <Image style={{ height: 70 }} source={IconCooking} resizeMode="contain" />
      <Paragraph center style={{ marginTop: 20, marginBottom: 0 }}>
        {'Kamu belum punya resep apapun di sini, ayo buat resep original kamu'}
      </Paragraph>
    </EmptyWrapper>
  );

  render() {
    const { listLoading, listItems } = this.props;

    return (
      <Container>
        <Header
          searchHandler={() => {
            this.props.navigation.navigate('Search');
          }}
        />
        <Content nospace>
          <List>
            <Loader visible={listLoading} />
            <View style={{ flex: 1, zIndex: 1 }}>
              {listItems && listItems.count() > 0 ? this.renderList() : this.renderEmpty()}
            </View>
          </List>
        </Content>
        <FilterCategory
          onSubmit={() => {
            this.props.setUseFilter(true);
            this.props.setFilterDialog(false);
            this.props.loadResult();
          }}
        />
      </Container>
    );
  }
}

ExploreFilterScene.propTypes = {
  navigation: PropTypes.object,
  setFilterDialog: PropTypes.func,
  setUseFilter: PropTypes.func,
  loadResult: PropTypes.func,
  listLoading: PropTypes.bool,
  listItems: PropTypes.object,
  selectedCategories: PropTypes.object,
};

export default compose(
  withList,
  withFilter,
)(ExploreFilterScene);

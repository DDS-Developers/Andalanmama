import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { View, Image } from 'react-native';
import { Spinner } from 'native-base';
import { withFilter } from '../../providers/Filter';
import List, { withList } from '../../containers/List';
import Paragraph from '../../components/Paragraph';
import EmptyWrapper from '../MyRecipe/EmptyWrapper';
import ListWrapper from '../MyRecipe/ListWrapper';
import IconCooking from '../../images/icon-cooking.png';
import RecipeItem from '../ExploreFilter/RecipeItem';
import LoaderWrapper from './Loader';

// eslint-disable-next-line react/prefer-stateless-function
export class Recent extends PureComponent {
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

  renderLoader() {
    const { listLoading } = this.props;
    if (listLoading) {
      return (
        <LoaderWrapper>
          <Spinner color="#888888" />
        </LoaderWrapper>
      );
    }
    return null;
  }

  renderEmpty = () => (
    <EmptyWrapper>
      <Image style={{ height: 70 }} source={IconCooking} resizeMode="contain" />
      <Paragraph center style={{ marginTop: 20, marginBottom: 0 }}>
        {'Kamu belum punya resep apapun di sini, ayo buat resep original kamu'}
      </Paragraph>
    </EmptyWrapper>
  );

  renderList = () => (
    <ListWrapper>
      {this.props.listItems.map(item => (
        <RecipeItem key={`recipe-filter-${item.get('id')}`} recipe={item} tags={this.state.tags} />
      ))}
    </ListWrapper>
  );

  render() {
    const { listItems } = this.props;

    return (
      <View style={{ flex: 1, zIndex: 1, position: 'relative' }}>
        <List>
          {this.renderLoader()}
          <View style={{ flex: 1, zIndex: 1 }}>
            {listItems && listItems.count() > 0 ? this.renderList() : this.renderEmpty()}
          </View>
        </List>
      </View>
    );
  }
}

Recent.propTypes = {
  selectedCategories: PropTypes.object,
  listLoading: PropTypes.bool,
  listItems: PropTypes.object,
  loadResult: PropTypes.func,
};

export default compose(
  withFilter,
  withList,
)(Recent);

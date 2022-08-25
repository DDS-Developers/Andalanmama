/**
 * components/ListRecipe/index.js
 *
 */
import React, { PureComponent } from 'react';
import { fromJS } from 'immutable';
import PropTypes from 'prop-types';
import { ActivityIndicator, RefreshControl, SafeAreaView } from 'react-native';
// import { ActivityIndicator } from 'react-native';
import CardRecipe from '../CardRecipe';
import Pane from '../Pane';
import FlatListWrapper from './FlatListWrapper';

const initialState = {
  items: fromJS([]),
  itemsFromProps: null,
  itemPerView: 10,
  pageTotal: 0,
  paged: 1,
  loading: false,
  isRefreshing: false,
};

export class ListRecipe extends PureComponent {
  state = initialState;

  static getDerivedStateFromProps(props, state) {
    const { items } = props;
    const newstate = state;
    if (items) {
      if (items !== state.itemsFromProps) {
        if (items !== state.items) {
          newstate.items = items;
        }
        newstate.itemsFromProps = items;
      }
    }
    return newstate;
  }

  componentDidMount() {
    const { total } = this.props;
    let { itemPerView } = this.props;
    if (!itemPerView) {
      itemPerView = 10;
    }
    const perView = Math.ceil(total / itemPerView);
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      itemPerView,
      pageTotal: perView,
    });
  }

  handleLoadMore = () => {
    // console.log('handleLoadMore');
    const { listLoading } = this.props;
    const { pageTotal, paged, loading } = this.state;
    if (!listLoading && !loading && paged < pageTotal) {
      // console.log('doLoadMore');
      const nextPaged = paged + 1;
      this.props.onLoadMore(nextPaged);
      this.setState({
        paged: nextPaged,
      });
    }
  };

  renderItem = item => {
    const { onRenderItem } = this.props;
    if (onRenderItem) {
      return onRenderItem(item);
    }
    return this.renderItemContent(item);
  };

  renderItemContent = item => {
    const { cardActions } = this.props;
    const image = item.get('image');
    const title = item.get('title');
    const id = item.get('id');

    return <CardRecipe image={image} title={title} id={id} actions={cardActions} />;
  };

  renderListFooter = () => {
    if (this.state.loading) {
      return (
        <Pane center>
          <ActivityIndicator size="small" color="#888888" />
        </Pane>
      );
    }
    return null;
  };

  render() {
    const { extraData } = this.props;
    const { items } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatListWrapper
          data={items}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={item => `item-${item.get('id')}`}
          contentContainerStyle={
            items && items.length > 0
              ? { paddingBottom: 30 }
              : { flex: 1, alignItems: 'center', justifyContent: 'center' }
          }
          numColumns={2}
          horizontal={false}
          columnWrapperStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
          extraData={{ ...this.state, ...extraData }}
          ListFooterComponent={this.renderListFooter}
          ListEmptyComponent={this.props.onRenderEmpty}
          onEndReachedThreshold={0.4}
          onEndReached={this.handleLoadMore}
          refreshControl={
            <RefreshControl refreshing={this.state.isRefreshing} onRefresh={this.props.onRefresh} />
          }
        />
      </SafeAreaView>
    );
  }
}

ListRecipe.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  items: PropTypes.array,
  total: PropTypes.number.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired,
  itemPerView: PropTypes.number,
  cardActions: PropTypes.object,
  extraData: PropTypes.object,
  onRenderItem: PropTypes.func,
  onRenderEmpty: PropTypes.func,
  listLoading: PropTypes.bool,
};

export default ListRecipe;

/**
 * components/ListRecipe/index.js
 *
 */
import React, { PureComponent } from 'react';
import { fromJS } from 'immutable';
import PropTypes from 'prop-types';
import { ActivityIndicator, RefreshControl, FlatList, View, Image } from 'react-native';
import Pane from '../../components/Pane';
import Paragraph from '../../components/Paragraph';

import MessageItem from './MessageItem';
import IconCooking from '../../images/icon-cooking.png';
import EmptyWrapper from './EmptyWrapper';

const initialState = {
  items: fromJS([]),
  itemsFromProps: null,
  itemPerView: 10,
  pageTotal: 0,
  paged: 1,
  loading: false,
  isRefreshing: false,
};

export class List extends PureComponent {
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

  renderItem = item => (
    <View style={{ flex: 1, width: '100%', marginBottom: 20 }} key={`message-${item.id}`}>
      <MessageItem item={item} />
    </View>
  );

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

  renderEmpty = () => (
    <EmptyWrapper>
      <Image style={{ height: 70 }} source={IconCooking} resizeMode="contain" />
      <Paragraph center style={{ marginTop: 20, marginBottom: 0 }}>
        {"You don't have any message list here"}
      </Paragraph>
    </EmptyWrapper>
  );

  render() {
    const { extraData } = this.props;
    const { items } = this.state;
    return (
      <FlatList
        data={items}
        renderItem={({ item }) => this.renderItem(item)}
        keyExtractor={item => `item-${item.get('id')}`}
        contentContainerStyle={
          items && items.length > 0
            ? { paddingBottom: 20 }
            : { flex: 1, alignItems: 'center', justifyContent: 'center' }
        }
        numColumns={1}
        horizontal={false}
        extraData={{ ...this.state, ...extraData }}
        ListFooterComponent={this.renderListFooter}
        ListEmptyComponent={this.renderEmpty}
        onEndReachedThreshold={0.4}
        onEndReached={this.handleLoadMore}
        refreshControl={
          <RefreshControl refreshing={this.state.isRefreshing} onRefresh={this.props.onRefresh} />
        }
        style={{
          flex: 1,
          paddingTop: 20,
          paddingBottom: 30,
          paddingLeft: 15,
          paddingRight: 15,
        }}
      />
    );
  }
}

List.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  items: PropTypes.array,
  total: PropTypes.number.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired,
  itemPerView: PropTypes.number,
  extraData: PropTypes.object,
  listLoading: PropTypes.bool,
};

export default List;

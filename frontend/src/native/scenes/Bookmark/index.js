/**
 * scenes/Bookmark/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Image } from 'react-native';
import { Container, View } from 'native-base';

import { withAuth } from '../../providers/Auth';
import { withBookmark } from '../../providers/Bookmark';
import { withBookmarkList } from '../../providers/BookmarkList';
import AuthRoot from '../../containers/AuthRoot';

import ListRecipe from '../../components/ListRecipe';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import Paragraph from '../../components/Paragraph';

import IconCooking from '../../images/icon-cooking.png';
import BookmarkItem from './BookmarkItem';
import EmptyWrapper from './EmptyWrapper';

export class BookmarkScene extends PureComponent {
  static navigationOptions = {
    title: 'Ditandai',
    header: null,
  };

  componentDidMount() {
    const { loggedIn } = this.props;
    if (loggedIn) {
      this.props.loadBookmarks();
    }
  }

  renderList = () => {
    const { listLoading, listItems } = this.props;

    return (
      <ListRecipe
        listLoading={listLoading}
        items={listItems.toArray()}
        total={30}
        onRenderItem={item => (
          <BookmarkItem
            key={`bookmark-${item.get('id')}`}
            bookmark={item}
            onDelete={id => this.props.removeBookmark(id)}
          />
        )}
        onLoadMore={paged => {
          this.props.setListPaged(paged);
          this.props.loadMoreBookmarks();
        }}
        onRefresh={() => {
          this.props.loadBookmarks();
        }}
        onRenderEmpty={this.renderEmpty}
      />
    );
  };

  renderEmpty = () => (
    <EmptyWrapper>
      <Image style={{ height: 70 }} source={IconCooking} resizeMode="contain" />
      <Paragraph center style={{ marginTop: 20, marginBottom: 0 }}>
        {'Kamu belum mempunyai menu andalan favorit, tandai sekarang!'}
      </Paragraph>
    </EmptyWrapper>
  );

  render() {
    const { listLoading } = this.props;

    return (
      <AuthRoot>
        <Container>
          <Header leftSettings={{ type: 'back' }} title="Ditandai" />
          <View style={{ flex: 1, backgroundColor: '#efefef', position: 'relative' }}>
            <Loader visible={listLoading} />
            <View style={{ flex: 1, zIndex: 1 }}>{this.renderList()}</View>
          </View>
        </Container>
      </AuthRoot>
    );
  }
}

BookmarkScene.propTypes = {
  listLoading: PropTypes.bool,
  listItems: PropTypes.object,
  loggedIn: PropTypes.bool,
  setListPaged: PropTypes.func,
  removeBookmark: PropTypes.func,
  loadBookmarks: PropTypes.func,
  loadMoreBookmarks: PropTypes.func,
};

export default compose(
  withAuth,
  withBookmarkList,
  withBookmark,
)(BookmarkScene);

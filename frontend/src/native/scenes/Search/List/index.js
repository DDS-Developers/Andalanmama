/**
 * scenes/Search/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Spinner } from 'native-base';
import Text from '../../../components/Text';
import Item from './Item';
import Wrapper from './Wrapper';
import ListWrapper from './ListWrapper';
import LoaderWrapper from './LoaderWrapper';

// eslint-disable-next-line react/prefer-stateless-function
export class List extends PureComponent {
  renderItems = () => {
    const { type, items } = this.props;

    if (items.count() > 0) {
      return (
        <React.Fragment>
          {items.map(item => (
            <Item key={`${type}-${item.get('id')}`} type={type} item={item} />
          ))}
        </React.Fragment>
      );
    }
    return (
      <Text size={200} color="#777777">
        Data tidak ditemukan.
      </Text>
    );
  };

  renderLoader = () => (
    <LoaderWrapper>
      <Spinner color="#888888" />
    </LoaderWrapper>
  );

  render() {
    const { title, loading } = this.props;
    return (
      <Wrapper>
        <View>
          <Text size={300} style={{ fontWeight: 'bold' }}>
            {title}
          </Text>
        </View>
        <ListWrapper>{loading ? this.renderLoader() : this.renderItems()}</ListWrapper>
      </Wrapper>
    );
  }
}

List.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  items: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default List;

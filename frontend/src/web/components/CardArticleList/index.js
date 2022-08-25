import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Card from '../Card';
import Wrapper from './Wrapper';

// eslint-disable-next-line react/prefer-stateless-function
class CardThumbnailList extends React.Component {
  doLoadMore = evt => {
    evt.preventDefault();
    this.props.onLoadMore();
  };

  render() {
    const { items, column, cardProps, onLoadMore, loadMore, ...others } = this.props;
    return (
      <Wrapper {...others}>
        <div className="_list">
          {items.map(item => (
            <Card
              key={`item-${item.id}`}
              column={column}
              title={item.title}
              permalink={item.permalink}
              image={item.image}
              user={item.user}
              time={item.time}
              paddingLeft="10px"
              paddingRight="10px"
              marginBottom="20px"
              {...cardProps}
            />
          ))}
        </div>
        {loadMore ? (
          <div className="_action">
            <Button type="button" onClick={this.doLoadMore}>
              Muat lebih banyak
            </Button>
          </div>
        ) : null}
      </Wrapper>
    );
  }
}

CardThumbnailList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      permalink: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    }),
  ),
  cardProps: PropTypes.object,
  column: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onLoadMore: PropTypes.func,
  loadMore: PropTypes.bool,
};

export default CardThumbnailList;

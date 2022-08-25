import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import Wrapper from './Wrapper';

// eslint-disable-next-line react/prefer-stateless-function
class CardList extends React.Component {
  render() {
    const { items, column, cardProps, ...others } = this.props;
    return (
      <Wrapper {...others}>
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
            {...cardProps}
          />
        ))}
      </Wrapper>
    );
  }
}

CardList.propTypes = {
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
};

export default CardList;

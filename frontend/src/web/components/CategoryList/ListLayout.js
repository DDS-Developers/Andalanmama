import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Link as Route } from 'react-router-dom';
import Item from './Item';

const ListLayout = props => {
  if (window.innerWidth <= 480) {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 1,
      arrows: false,
    };

    return (
      <Slider {...settings}>
        {props.categories.map(item => (
          <Item key={`item-${item.id}`} className={props.category === item.id ? 'active' : ''}>
            <Route to={`/category/${item.slug}`}>
              <div className="_thumbnail" style={{ backgroundImage: `url('${item.image}')` }} />
              <div className="_label">{item.name}</div>
            </Route>
          </Item>
        ))}
      </Slider>
    );
  }
  return (
    <React.Fragment>
      {props.categories.map(item => (
        <Item key={`item-${item.id}`} className={props.category === item.id ? 'active' : ''}>
          <Route to={`/category/${item.slug}`}>
            <div className="_thumbnail" style={{ backgroundImage: `url('${item.image}')` }} />
            <div className="_label">{item.name}</div>
          </Route>
        </Item>
      ))}
    </React.Fragment>
  );
};

ListLayout.propTypes = {
  categories: PropTypes.array.isRequired,
  category: PropTypes.number,
};

export default ListLayout;

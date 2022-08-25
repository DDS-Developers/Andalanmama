import React from 'react';
import PropTypes from 'prop-types';
import { Link as Route } from 'react-router-dom';
import Text from '../../../components/Text';
import NavItemWrapper from './NavItemWrapper';

const NavItem = props => {
  const { title, images, user, ...others } = props;
  const navImage = images.slice(0, 4);
  return (
    <NavItemWrapper {...others}>
      <div className="_nav--inner">
        <div className="_nav--top">
          <Text as="span" size={300}>
            {title}
          </Text>
          <Text as="span" size={100}>
            Oleh {user}
          </Text>
        </div>
        <div className="_nav--images">
          <ul className="_images">
            {navImage.map(image => (
              <li key={`item-${image.id}`}>
                <Route to={`/recipe/detail/${image.slug}`}>
                  <img src={image.image} alt="" />
                </Route>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </NavItemWrapper>
  );
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  user: PropTypes.string.isRequired,
};

export default NavItem;

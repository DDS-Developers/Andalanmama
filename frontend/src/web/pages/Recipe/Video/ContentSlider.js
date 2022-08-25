import React from 'react';
import PropTypes from 'prop-types';
import CardVideo from '../../../components/CardVideo';
import CardButton from '../../../components/CardButton';

class ContentSlider extends React.PureComponent {
  trimCharacters(text, maxLength) {
    const dots = text.length > maxLength;
    let character = text;
    if (dots) {
      character = text.substr(0, maxLength);
      character = text.substr(0, Math.min(text.length, text.lastIndexOf(' ')));
    }
    return dots ? `${character}...` : character;
  }

  render() {
    const { recipes } = this.props;
    const items = recipes.map(item => ({
      id: item.id,
      image: item.image,
      name: item.name,
      user: item.user.fullname,
      portion: item.portion,
      permalink: `/recipe/detail/${item.slug}`,
      timeForCook: item.time,
      time: `Durasi ${item.cookduration}`,
    }));
    const itemFirst = items.shift();
    const itemThumbnail = items.slice(0, 3);
    return (
      <div className="_player">
        <div className="_player--main">
          <CardVideo
            className="_player--video"
            thumbnail={itemFirst.image}
            thumbnailRadius={false}
            info={{
              title: itemFirst.name,
              permalink: itemFirst.permalink,
              user: `Porsi Untuk ${itemFirst.portion} org`,
              time: itemFirst.time,
            }}
          />
        </div>
        <div className="_player--nav">
          {itemThumbnail.map(item => (
            <CardButton
              className="_nav--item"
              key={`item-${item.id}`}
              title={this.trimCharacters(item.name, 20)}
              meta={`Oleh ${item.user}`}
              image={item.image}
              permalink={item.permalink}
            />
          ))}
        </div>
      </div>
    );
  }
}

ContentSlider.propTypes = {
  recipes: PropTypes.array.isRequired,
};

export default ContentSlider;

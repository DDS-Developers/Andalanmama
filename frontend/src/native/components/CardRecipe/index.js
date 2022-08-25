/**
 * components/CardRecipe/index.js
 *
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { View, ActionSheet, Icon } from 'native-base';
import Text from '../Text';
import CardWrapper from './CardWrapper';
import IconWrapper from './IconWrapper';
import Toggle from './Toggle';
import TagsWrapper from './TagsWrapper';

/* eslint-disable react/prefer-stateless-function */
export class CardRecipe extends PureComponent {
  renderImage() {
    const { image, imageHeight, showCount } = this.props;

    if (image && typeof image !== 'string') {
      let multipleImage = [];
      if (image && image.count() > 0) {
        multipleImage = image.slice(0, 4);
      }
      return (
        <TouchableOpacity onPress={() => this.onImageClick()}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              height: imageHeight || 154,
              overflow: 'hidden',
              backgroundColor: '#efefef',
            }}
          >
            {multipleImage.map(thumbnail => (
              <Image
                key={`thumbnail-group-${thumbnail.get('id')}`}
                source={{ uri: thumbnail.get('image') }}
                // style={{ height: imageHeight / 2 || 77, width: '50%' }}
                style={{ height: '100%', width: '100%' }}
                resizeMode="cover"
              />
            ))}
          </View>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity onPress={() => this.onImageClick()}>
        <View style={{ position: 'relative', height: imageHeight || 154 }}>
          <Image
            source={{ uri: image }}
            style={{ height: imageHeight || 154, flex: 1 }}
            resizeMode="cover"
          />
          {showCount ? this.renderCountInfo() : null}
        </View>
      </TouchableOpacity>
    );
  }

  onImageClick = () => {
    const { image, id, mainHandler, navigation } = this.props;
    if (mainHandler) {
      mainHandler(id);
    } else {
      const params = this.getRouteParams(id);
      let target = 'RecipeDetail';
      if (image && typeof image !== 'string') {
        target = 'RecipeBookDetail';
      }
      navigation.navigate(target, params);
    }
  };

  renderActions = () => {
    const { actions, children } = this.props;

    if (children) {
      return children;
    }
    if (actions) {
      return (
        <View style={{ flex: 15 }}>
          <Toggle
            transparent
            iconLeft
            onPress={() => ActionSheet.show(actions.settings, actions.handler)}
          >
            <IconWrapper type="MaterialIcons" name="more-vert" />
          </Toggle>
        </View>
      );
    }
    return null;
  };

  fnFormatter = num => {
    const si = [
      { value: 1, symbol: '' },
      { value: 1e3, symbol: 'k' },
      { value: 1e6, symbol: 'M' },
      { value: 1e9, symbol: 'G' },
      { value: 1e12, symbol: 'T' },
      { value: 1e15, symbol: 'P' },
      { value: 1e18, symbol: 'E' },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let i;
    for (i = si.length - 1; i > 0; i -= 1) {
      if (num >= si[i].value) {
        break;
      }
    }
    return (num / si[i].value).toFixed(1).replace(rx, '$1') + si[i].symbol;
  };

  renderCountInfo = () => {
    const { commentCount, likeCount } = this.props;

    return (
      <View style={{ position: 'absolute', bottom: 5, right: 5 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <View
            style={{
              marginRight: 5,
              backgroundColor: '#ffffff',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: 32,
              height: 32,
              borderRadius: 16,
            }}
          >
            <IconWrapper
              type="FontAwesome"
              name="thumbs-o-up"
              style={{ fontSize: 15, color: '#e83249' }}
            />
            <Text color="#e83249" style={{ fontSize: 9, lineHeight: 12 }}>
              {likeCount ? this.fnFormatter(likeCount) : 0}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#ffffff',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: 32,
              height: 32,
              borderRadius: 16,
            }}
          >
            <IconWrapper
              type="FontAwesome"
              name="comments-o"
              style={{ fontSize: 15, color: '#e83249' }}
            />
            <Text color="#e83249" style={{ fontSize: 9, lineHeight: 12 }}>
              {commentCount ? this.fnFormatter(commentCount) : 0}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  renderMeta = () => {
    const { meta, duration } = this.props;
    if (meta) {
      return (
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            borderTopColor: '#ddd',
            borderTopWidth: 1,
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
            marginBottom: 0,
            paddingBottom: 10,
          }}
        >
          <View style={{ flex: 70 }}>
            <Text style={{ fontSize: 11 }}>{duration} menit</Text>
          </View>
          <View style={{ flex: 30, textAlign: 'right' }}>
            <Text style={{ textAlign: 'right' }}>
              <Text
                style={{
                  fontSize: 11,
                  backgroundColor: '#f79d32',
                  paddingLeft: 3,
                  paddingRight: 3,
                }}
              >
                <Icon type="MaterialIcons" name="check" style={{ fontSize: 15, color: '#fff' }} />
              </Text>
            </Text>
          </View>
        </View>
      );
    }

    return <React.Fragment />;
  };

  renderTags = () => {
    const { tags } = this.props;

    if (tags && tags !== '') {
      return (
        <TagsWrapper>
          <Text size={200}>{tags}</Text>
        </TagsWrapper>
      );
    }
    return null;
  };

  getRouteParams = id => {
    const { routeParams } = this.props;

    let params = {};
    if (routeParams) {
      params = { id, ...routeParams };
    } else {
      params = { id };
    }
    return params;
  };

  render() {
    const { title, uploader, actionsPosition, image, tags, ...others } = this.props;
    return (
      <CardWrapper {...others}>
        {actionsPosition === 'top' ? this.renderActions() : null}
        {this.renderImage()}
        <View
          style={{
            paddingHorizontal: tags && tags !== '' ? 0 : 10,
            paddingTop: 10,
            paddingBottom: tags && tags !== '' ? 12 : 10,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          <View style={{ flex: 85 }}>
            <View
              style={{
                paddingHorizontal: tags && tags !== '' ? 10 : 0,
              }}
            >
              <Text numberOfLines={1} style={{ fontSize: 15 }}>
                {title}
              </Text>
              {uploader ? <Text style={{ fontSize: 10 }}>By {uploader}</Text> : null}
            </View>
            {this.renderTags()}
          </View>
          {!actionsPosition ? this.renderActions() : null}
        </View>
        {this.renderMeta()}
      </CardWrapper>
    );
  }
}

CardRecipe.propTypes = {
  image: PropTypes.any,
  full: PropTypes.bool,
  title: PropTypes.string,
  duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  status: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  meta: PropTypes.bool,
  imageHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  uploader: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
  navigation: PropTypes.object,
  actions: PropTypes.shape({
    settings: PropTypes.object,
    handler: PropTypes.func,
  }),
  actionsPosition: PropTypes.string,
  tags: PropTypes.string,
  routeParams: PropTypes.object,
  mainHandler: PropTypes.func,
  showCount: PropTypes.bool,
  commentCount: PropTypes.number,
  likeCount: PropTypes.number,
};

export default function(props) {
  const navigation = useNavigation();

  return <CardRecipe {...props} navigation={navigation} />;
}

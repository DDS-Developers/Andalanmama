/**
 * containers/RecipeSelect/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Image } from 'react-native';
import { View } from 'native-base';
import { withMyRecipe } from '../../providers/MyRecipe';
import List, { withList } from '../List';
import Content from '../../components/Content';
import Paragraph from '../../components/Paragraph';
import Loader from '../../components/Loader';
import IconCooking from '../../images/icon-cooking.png';
import Menu from './Menu';
import EmptyWrapper from './EmptyWrapper';

export class RecipeSelectContainer extends PureComponent {
  componentDidMount() {
    this.props.clearList();
    this.props.setRecipeType('my_recipe');
    this.props.loadMyRecipes();
  }

  componentWillUnmount() {
    this.props.clearList();
  }

  renderList = () => <View />;

  renderEmptyContent = message => (
    <EmptyWrapper>
      <Image style={{ height: 70 }} source={IconCooking} resizeMode="contain" />
      <Paragraph center style={{ marginTop: 20, marginBottom: 0 }}>
        {message}
      </Paragraph>
    </EmptyWrapper>
  );

  renderEmpty = () => {
    const { recipeType } = this.props;

    let message = '';
    if (recipeType === 'bookmark') {
      message = 'Kamu belum mempunyai menu andalan favorit, tandai sekarang! ';
    } else {
      message = 'Kamu belum punya resep apapun di sini, ayo buat resep original kamu';
    }

    return this.renderEmptyContent(message);
  };

  render() {
    const { listLoading, listItems } = this.props;

    return (
      <React.Fragment>
        <Menu />
        <Content nospace>
          <List>
            <View style={{ flex: 1, position: 'relative' }}>
              {listItems && listItems.count() > 0 ? this.renderList() : this.renderEmpty()}
              <Loader visible={listLoading} />
            </View>
          </List>
        </Content>
      </React.Fragment>
    );
  }
}

RecipeSelectContainer.propTypes = {
  clearList: PropTypes.func,
  listLoading: PropTypes.bool,
  listItems: PropTypes.object,
  recipeType: PropTypes.string,
  setRecipeType: PropTypes.func,
  loadMyRecipes: PropTypes.func,
};

export default compose(
  withList,
  withMyRecipe,
)(RecipeSelectContainer);

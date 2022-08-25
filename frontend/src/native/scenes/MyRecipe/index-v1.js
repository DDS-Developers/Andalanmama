/**
 * scenes/MyRecipe/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Image } from 'react-native';
import { Container, View, Icon } from 'native-base';

import { withAuth } from '../../providers/Auth';
import { withMyRecipe } from '../../providers/MyRecipe';
import List, { withList } from '../../containers/List';

import Dialog from '../../components/Dialog';
import ButtonText from '../../components/Dialog/Button';
import Content from '../../components/Content';
import Loader from '../../components/Loader';
import Paragraph from '../../components/Paragraph';
import Text from '../../components/Text';
import IconCooking from '../../images/icon-cooking.png';
import Filter from './Filter';
import RecipeItem from './RecipeItem';
import ButtonCreateWrapper from './ButtonCreateWrapper';
import IconCreateWrapper from './IconCreateWrapper';
import EmptyWrapper from './EmptyWrapper';
import ListWrapper from './ListWrapper';

export class MyRecipeScene extends PureComponent {
  static navigationOptions = {
    title: 'My Recipe',
  };

  state = {
    showDeleteConfirm: false,
    deletedId: 0,
  };

  componentDidMount() {
    const { loggedIn, navigation } = this.props;
    if (!loggedIn) {
      navigation.navigate('Login');
    }
    this.props.loadMyRecipes();
  }

  componentWillUnmount() {
    this.props.changeMyRecipeFilterStatus('all');
  }

  renderList = () => (
    <ListWrapper>
      {this.props.listItems.map(item => (
        <RecipeItem
          key={`recipe-${item.get('id')}`}
          recipe={item}
          onDelete={id => {
            this.setState({
              showDeleteConfirm: true,
              deletedId: id,
            });
          }}
        />
      ))}
    </ListWrapper>
  );

  renderButtonCreate = () => {
    const { listItems, navigation } = this.props;

    return (
      <ButtonCreateWrapper onPress={() => navigation.navigate('MyRecipeCreate')}>
        {!listItems || listItems.count() < 1 ? <Text>Create My First Recipe</Text> : null}
        <IconCreateWrapper>
          <Icon style={{ color: '#ffffff' }} type="MaterialIcons" name="add" />
        </IconCreateWrapper>
      </ButtonCreateWrapper>
    );
  };

  renderEmpty = () => (
    <EmptyWrapper>
      <Image style={{ height: 70 }} source={IconCooking} resizeMode="contain" />
      <Paragraph center style={{ marginTop: 20, marginBottom: 0 }}>
        {'Kamu belum punya resep apapun di sini, ayo buat resep original kamu'}
      </Paragraph>
    </EmptyWrapper>
  );

  renderDeleteConfirm = () => {
    const { showDeleteConfirm } = this.state;

    return (
      <Dialog
        visible={showDeleteConfirm}
        title="Are You Sure?"
        message="Yakinkah anda akan menghapus resep ini?"
        actions={
          <React.Fragment>
            <ButtonText
              onPress={() => {
                this.setState({
                  showDeleteConfirm: false,
                });
              }}
            >
              Cancel
            </ButtonText>
            <ButtonText
              onPress={() => {
                this.setState({
                  showDeleteConfirm: false,
                });
                this.props.deleteMyRecipe(this.state.deletedId);
              }}
            >
              Continue
            </ButtonText>
          </React.Fragment>
        }
      />
    );
  };

  render() {
    const { listLoading, listItems } = this.props;

    return (
      <Container>
        <Filter />
        <Content nospace>
          <List>
            <Loader visible={listLoading} />
            <View style={{ flex: 1, zIndex: 1 }}>
              {listItems && listItems.count() > 0 ? this.renderList() : this.renderEmpty()}
            </View>
          </List>
        </Content>
        {this.renderButtonCreate()}
        {this.renderDeleteConfirm()}
      </Container>
    );
  }
}

MyRecipeScene.propTypes = {
  loadMyRecipes: PropTypes.func,
  deleteMyRecipe: PropTypes.func,
  changeMyRecipeFilterStatus: PropTypes.func,
  listLoading: PropTypes.bool,
  listItems: PropTypes.object,
  navigation: PropTypes.object,
  loggedIn: PropTypes.bool,
};

export default compose(
  withAuth,
  withList,
  withMyRecipe,
)(MyRecipeScene);

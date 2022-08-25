/**
 * scenes/RecipeBookDetail/index.js
 *
 */
import React, { PureComponent } from 'react';
import { ScrollView, View } from 'react-native';
import { Container, H2, Text } from 'native-base';
import PropTypes from 'prop-types';
import { withRecipeBook } from '../../providers/RecipeBook';
import Header from '../../components/Header';
import ContentClear from '../../components/ContentClear';
import CardRecipe from '../../components/CardRecipe';
import Loader from '../../components/Loader';
import Wrapper from './Wrapper';
import ViewItem from './ViewItem';
import ViewList from './ViewList';

export class RecipeBookDetail extends PureComponent {
  static navigationOptions = {
    title: 'Buku Resep',
    header: null,
  };

  componentDidMount() {
    const { route } = this.props;
    const { id } = route.params;

    if (id) {
      this.props.loadRecipeBookDetail(id);
    }
  }

  render() {
    const { manageLoading, recipeBook } = this.props;

    return (
      <Container>
        <Header title="Buku Resep" leftSettings={{ type: 'back' }} />
        <ContentClear>
          <Loader visible={manageLoading} />
          {recipeBook && recipeBook.count() > 0 ? (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              <Wrapper>
                <H2 style={{ color: '#E83249', marginBottom: 23 }}>{recipeBook.get('title')}</H2>
                <ViewItem>
                  <Text>{recipeBook.getIn(['user', 'fullname'])}</Text>
                  <Text>{recipeBook.get('recipes').count()} Resep</Text>
                </ViewItem>
              </Wrapper>
              <ViewList>
                {recipeBook.get('recipes').map(item => (
                  <View key={`recipe-${item.get('id')}`}>
                    <CardRecipe
                      image={item.get('image')}
                      title={item.get('name')}
                      id={item.get('id')}
                      showCount
                      likeCount={item.get('like_count')}
                      commentCount={item.get('comment_count')}
                    />
                  </View>
                ))}
              </ViewList>
            </ScrollView>
          ) : null}
        </ContentClear>
      </Container>
    );
  }
}

RecipeBookDetail.propTypes = {
  route: PropTypes.object,
  manageLoading: PropTypes.bool,
  loadRecipeBookDetail: PropTypes.func,
  recipeBook: PropTypes.object,
};

export default withRecipeBook(RecipeBookDetail);

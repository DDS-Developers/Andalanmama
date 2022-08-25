/**
 * components/RecipeDetail/DetailDesc/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { H2, Text, View } from 'native-base';

import { withRecipe } from '../../../providers/Recipe';
import Paragraph from '../../../components/Paragraph';
import IconText from '../../../components/IconText';
// import Debugger from '../../../helpers/Debugger';

import Profile from '../Profile';
import ContentWrapper from './ContentWrapper';
import TitleWrapper from './TitleWrapper';
import DescWrapper from './DescWrapper';
import RecipeSlider from '../RecipeSlider';

export class DetailDesc extends React.PureComponent {
  renderIngredientItem = item => (
    <React.Fragment key={`ingredient-${item.get('order_column')}`}>
      {item.get('type') === 'group' ? (
        <Text style={{ fontSize: 13, fontWeight: 'bold', marginTop: 15, marginBottom: 10 }}>
          {item.get('ingredient')}
        </Text>
      ) : (
        <Text style={{ fontSize: 13 }}>{item.get('ingredient')}</Text>
      )}
    </React.Fragment>
  );

  renderIngredient = () => {
    const { recipe } = this.props;
    const ingredient = recipe.get('ingredient');

    return (
      <DescWrapper>
        <Text style={{ fontSize: 13, fontWeight: 'bold', marginVertical: 10 }}>Bahan-bahan</Text>
        {ingredient.map(item => this.renderIngredientItem(item))}
      </DescWrapper>
    );
  };

  renderStep = () => {
    const { recipe } = this.props;
    const step = recipe.get('step');

    return (
      <React.Fragment>
        <TitleWrapper>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Langkah</Text>
        </TitleWrapper>

        {step ? <RecipeSlider step={step} /> : null}
      </React.Fragment>
    );
  };

  render() {
    const { recipe } = this.props;
    const user = recipe.get('user');

    return (
      <ContentWrapper>
        <H2 style={{ color: '#E83249', marginBottom: 15 }}>{recipe.get('name')}</H2>
        <Paragraph textStyles={{ size: 100 }}>{recipe.get('description')}</Paragraph>

        {user ? <Profile user={user} /> : null}

        <TitleWrapper>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 25 }}>
            <IconText
              iconType="MaterialIcons"
              iconName="person-outline"
              iconStyles={{ fontSize: 20, marginRight: 5 }}
              text={`Porsi ${recipe.get('portion')} Org`}
              textStyles={{ fontSize: 11 }}
            />
            <IconText
              iconType="MaterialIcons"
              iconName="schedule"
              iconStyles={{ fontSize: 20, marginRight: 5, marginLeft: 25 }}
              text={`Durasi ${recipe.get('cookduration')}`}
              textStyles={{ fontSize: 11 }}
            />
          </View>

          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Bahan-bahan</Text>
        </TitleWrapper>

        {this.renderIngredient()}
        {this.renderStep()}
      </ContentWrapper>
    );
  }
}

DetailDesc.propTypes = {
  recipe: PropTypes.object,
};

export default withRecipe(DetailDesc);

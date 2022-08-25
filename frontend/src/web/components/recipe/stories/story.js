import React from 'react';
import { storiesOf } from '@storybook/react';

import Recipe from '../Recipe';
import RecipeHome from '../RecipeHome';
import ExploreRecipe from '../ExploreRecipe';

import storage from '../../../../db';
const recipe = storage.recipes[0];

const onLoadMore = () => {
  console.log('fetch data from server');
};

storiesOf('Recipe', module)
  .add('Single recipe', () => <Recipe recipe={recipe} />)
  .add('Explore recipe', () => <ExploreRecipe recipes={storage.recipes} onLoadMore={onLoadMore} />)
  .add('Home recipe slider', () => (
    <div className="container">
      <RecipeHome recipes={storage.recipes} />
    </div>
  ));

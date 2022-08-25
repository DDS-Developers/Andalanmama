/**
 * Tour guide
 */
import React from 'react';
import Intro from './Intro';
import Scroll from './Scroll';
import Drag from './Drag';
import Search from './Search';
import Filter from './Filter';
import MenuExplore from './MenuExplore';
import MenuSchedule from './MenuSchedule';
import MenuRecipe from './MenuRecipe';
import MenuArticle from './MenuArticle';
import MenuAccount from './MenuAccount';

const TourGuideScenes = () => (
  <React.Fragment>
    <Drag />
    <Filter />
    <Search />
    <Scroll />
    <MenuAccount />
    <MenuArticle />
    <MenuRecipe />
    <MenuSchedule />
    <MenuExplore />
    <Intro />
  </React.Fragment>
);

export default TourGuideScenes;

/**
 * Tour guide
 */
import React from 'react';
import Intro from './Intro';
import Scroll from './Scroll';
// import Drag from './Drag';
import Search from './Search';
import Filter from './Filter';
import MenuExplore from './MenuExplore';
import MenuSchedule from './MenuSchedule';
import MenuRecipe from './MenuRecipe';
import MenuArticle from './MenuArticle';
import MenuAccount from './MenuAccount';
import MyScheduleMain from '../MySchedule/Main';
import MyScheduleExplore from '../MySchedule/Explore';
import MyScheduleCreate from '../MySchedule/Create';
import MyRecipeCreate from '../MyRecipe/Create';
import MyRecipeFilterAll from '../MyRecipe/FilterAll';
import MyRecipeFilterAccept from '../MyRecipe/FilterAccept';
import MyRecipeFilterDraft from '../MyRecipe/FilterDraft';
import MyRecipeFilterNotPublish from '../MyRecipe/FilterNotPublish';
import MyRecipeFilterWaiting from '../MyRecipe/FilterWaiting';
import MyAccountLogin from '../MyAccount/Login';
import MyAccountMainMenu from '../MyAccount/MainMenu';
import MyAccountMenuOthers from '../MyAccount/MenuOthers';

const TourGuideScenes = () => (
  <React.Fragment>
    <MyAccountMenuOthers />
    <MyAccountMainMenu />
    <MyAccountLogin />
    <MyRecipeFilterWaiting />
    <MyRecipeFilterNotPublish />
    <MyRecipeFilterDraft />
    <MyRecipeFilterAccept />
    <MyRecipeFilterAll />
    <MyRecipeCreate />
    <MyScheduleCreate />
    <MyScheduleExplore />
    <MyScheduleMain />
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

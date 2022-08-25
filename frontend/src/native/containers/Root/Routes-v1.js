/* eslint-disable import/no-unresolved */
/**
 * containers/Root/Routes.js
 *
 */
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'native-base';
import { HeaderConfig } from './Options';

import NavigationService from '../../helpers/NavigationService';
import ExploreScene from '../../scenes/Explore';
import ExploreFilterScene from '../../scenes/ExploreFilter';
import SearchScene from '../../scenes/Search';
import RecipeDetailScene from '../../scenes/RecipeDetail';
import RecipeCommentScene from '../../scenes/RecipeComment';
import ProfileScene from '../../scenes/Profile';
import ExploreScheduleScene from '../../scenes/ExploreSchedule';
import ExploreScheduleDetailScene from '../../scenes/ExploreScheduleDetail';
import MyScheduleScene from '../../scenes/MySchedule';
import MyScheduleCreateScene from '../../scenes/MyScheduleCreate';
import MyScheduleEditScene from '../../scenes/MyScheduleEdit';
import MyScheduleRecipeMainScene from '../../scenes/MyScheduleRecipeMain';
import MyScheduleRecipeAltScene from '../../scenes/MyScheduleRecipeAlt';
import MyRecipeScene from '../../scenes/MyRecipe';
import MyRecipeCreateScene from '../../scenes/MyRecipeCreate';
import MyRecipeEditScene from '../../scenes/MyRecipeEdit';
import MyRecipePublishScene from '../../scenes/MyRecipePublish';
import RecipeBookScene from '../../scenes/RecipeBook';
import RecipeBookCreateScene from '../../scenes/RecipeBookCreate';
import RecipeBookEditScene from '../../scenes/RecipeBookEdit';
import RecipeBookDetailScene from '../../scenes/RecipeBookDetail';
import RecipeBookItemsScene from '../../scenes/RecipeBookItems';
import RecipeBookPublishScene from '../../scenes/RecipeBookPublish';
import BookmarkScene from '../../scenes/Bookmark';
import MyMessageScene from '../../scenes/MyMessage';
import MyMessageDetailScene from '../../scenes/MyMessageDetail';
import MyAccountScene from '../../scenes/MyAccount';
import SettingsScene from '../../scenes/Settings';
import ProfileEditScene from '../../scenes/ProfileEdit';
import ChangePasswordScene from '../../scenes/ChangePassword';
import HelpScene from '../../scenes/Help';
import PrivacyPolicyScene from '../../scenes/PrivacyPolicy';
import TermsScene from '../../scenes/Terms';
import FaqScene from '../../scenes/Faq';
import GuideBookScene from '../../scenes/GuideBook';

import LoginScene from '../../scenes/Login';
import LoginFormScene from '../../scenes/LoginForm';
import RegisterScene from '../../scenes/Register';
import ForgotPasswordScene from '../../scenes/ForgotPassword';
import ResetPasswordScene from '../../scenes/ResetPassword';
import UserVerificationScene from '../../scenes/UserVerification';

const ExploreStack = createStackNavigator(
  {
    Explore: { screen: ExploreScene },
    ExploreFilter: { screen: ExploreFilterScene },
    Search: { screen: SearchScene },
    RecipeDetail: { screen: RecipeDetailScene },
    RecipeBookDetail: { screen: RecipeBookDetailScene },
    RecipeComment: { screen: RecipeCommentScene },
    Login: { screen: LoginScene },
    Profile: { screen: ProfileScene },
    MyAccount: { screen: MyAccountScene },
  },
  {
    defaultNavigationOptions: HeaderConfig,
  },
);

ExploreStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const ScheduleStack = createStackNavigator(
  {
    MySchedule: { screen: MyScheduleScene },
    ExploreSchedule: { screen: ExploreScheduleScene },
    ExploreScheduleDetail: { screen: ExploreScheduleDetailScene },
    MyScheduleCreate: { screen: MyScheduleCreateScene },
    MyScheduleEdit: { screen: MyScheduleEditScene },
    MyScheduleRecipeMain: { screen: MyScheduleRecipeMainScene },
    MyScheduleRecipeAlt: { screen: MyScheduleRecipeAltScene },
    RecipeDetail: { screen: RecipeDetailScene },
    RecipeComment: { screen: RecipeCommentScene },
    Profile: { screen: ProfileScene },
    MyAccount: { screen: MyAccountScene },
  },
  {
    defaultNavigationOptions: HeaderConfig,
  },
);

ScheduleStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    const { routes } = navigation.state;
    if (routes.length > 1) {
      const secondRoute = routes[1];
      if (secondRoute.routeName === 'ExploreSchedule') {
        tabBarVisible = true;
      } else {
        tabBarVisible = false;
      }
    } else {
      tabBarVisible = false;
    }
  }

  return {
    tabBarVisible,
  };
};

const RecipeStack = createStackNavigator(
  {
    MyRecipe: { screen: MyRecipeScene },
    MyRecipeCreate: { screen: MyRecipeCreateScene },
    MyRecipeEdit: { screen: MyRecipeEditScene },
    MyRecipePublish: { screen: MyRecipePublishScene },
    RecipeDetail: { screen: RecipeDetailScene },
    RecipeComment: { screen: RecipeCommentScene },
    Profile: { screen: ProfileScene },
    MyAccount: { screen: MyAccountScene },
  },
  {
    defaultNavigationOptions: HeaderConfig,
  },
);

// Hide tabbar
RecipeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const BookmarkStack = createStackNavigator(
  {
    Bookmark: { screen: BookmarkScene },
    RecipeDetail: { screen: RecipeDetailScene },
    RecipeComment: { screen: RecipeCommentScene },
    Profile: { screen: ProfileScene },
    MyAccount: { screen: MyAccountScene },
  },
  {
    defaultNavigationOptions: HeaderConfig,
  },
);

BookmarkStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const AccountStack = createStackNavigator(
  {
    MyAccount: { screen: MyAccountScene },
    ProfileEdit: { screen: ProfileEditScene },
    ChangePassword: { screen: ChangePasswordScene },
    // MyRecipe: { screen: MyRecipeScene }, // to RecipeTabNavigator
    RecipeBook: { screen: RecipeBookScene },
    RecipeBookCreate: { screen: RecipeBookCreateScene },
    RecipeBookEdit: { screen: RecipeBookEditScene },
    RecipeBookDetail: { screen: RecipeBookDetailScene },
    RecipeBookItems: { screen: RecipeBookItemsScene },
    RecipeBookPublish: { screen: RecipeBookPublishScene },
    // MySchedule: { screen: MyScheduleScene }, // to ScheduleTabNavigator
    MyMessage: { screen: MyMessageScene },
    MyMessageDetail: { screen: MyMessageDetailScene },

    Help: { screen: HelpScene },
    PrivacyPolicy: { screen: PrivacyPolicyScene },
    Terms: { screen: TermsScene },
    Faq: { screen: FaqScene },
    GuideBook: { screen: GuideBookScene },
    Settings: { screen: SettingsScene },

    Login: { screen: LoginScene },
    LoginForm: { screen: LoginFormScene },
    Register: { screen: RegisterScene },
    ResetPassword: { screen: ResetPasswordScene },
    ForgotPassword: { screen: ForgotPasswordScene },
    UserVerification: { screen: UserVerificationScene },
  },
  {
    defaultNavigationOptions: HeaderConfig,
  },
);

const config = ({ navigation }) => ({
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => {
    const { routeName } = navigation.state;
    let icon;

    if (routeName === 'ExploreTabNavigator') {
      icon = 'explore';
    } else if (routeName === 'ScheduleTabNavigator') {
      icon = 'event';
    } else if (routeName === 'RecipeTabNavigator') {
      icon = 'developer-board';
    } else if (routeName === 'BookmarkTabNavigator') {
      icon = 'bookmark';
    } else {
      icon = 'account-circle';
    }

    return <Icon type="MaterialIcons" name={icon} style={{ color: tintColor, fontSize: 20 }} />;
  },
});

const TabNavigator = createBottomTabNavigator(
  {
    ExploreTabNavigator: {
      screen: ExploreStack,
      navigationOptions: { title: 'Telusuri' },
    },
    ScheduleTabNavigator: {
      screen: ScheduleStack,
      navigationOptions: { title: 'Jadwal' },
    },
    RecipeTabNavigator: {
      screen: RecipeStack,
      navigationOptions: { title: 'Resep Saya' },
    },
    BookmarkTabNavigator: {
      screen: BookmarkStack,
      navigationOptions: { title: 'Ditandai' },
    },
    AccountTabNavigator: {
      screen: AccountStack,
      navigationOptions: { title: 'Akun' },
    },
  },
  {
    defaultNavigationOptions: config,
    tabBarOptions: {
      activeTintColor: '#e3e94a',
      inactiveTintColor: '#ffffff',
      labelStyle: { fontSize: 10 },
      style: { backgroundColor: '#e83249' },
    },
    // resetOnBlur: true,
  },
);
const AppNavContainer = createAppContainer(TabNavigator);

const Routes = () => (
  <AppNavContainer
    ref={navigatorRef => {
      NavigationService.setTopLevelNavigator(navigatorRef);
    }}
  />
);

export default Routes;

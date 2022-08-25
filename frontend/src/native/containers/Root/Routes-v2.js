/**
 * containers/Root/Routes.js
 *
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base';
import { HeaderConfig } from './Options';

import { navigationRef } from '../../helpers/NavigationService';
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

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/**
 * Explore stack
 */
const ExploreStack = () => (
  <Stack.Navigator initialRouteName="Explore" screenOptions={HeaderConfig}>
    <Stack.Screen name="Explore" component={ExploreScene} />
    <Stack.Screen name="ExploreFilter" component={ExploreFilterScene} />
    <Stack.Screen name="Search" component={SearchScene} />
    <Stack.Screen name="RecipeDetail" component={RecipeDetailScene} />
    <Stack.Screen name="RecipeBookDetail" component={RecipeBookDetailScene} />
    <Stack.Screen name="RecipeComment" component={RecipeCommentScene} />
    <Stack.Screen name="Login" component={LoginScene} />
    <Stack.Screen name="Profile" component={ProfileScene} />
    <Stack.Screen name="MyAccount" component={MyAccountScene} />
  </Stack.Navigator>
);

/**
 * Schedule stack
 */
const ScheduleStack = () => (
  <Stack.Navigator initialRouteName="MySchedule" screenOptions={HeaderConfig}>
    <Stack.Screen name="MySchedule" component={MyScheduleScene} />
    <Stack.Screen name="ExploreSchedule" component={ExploreScheduleScene} />
    <Stack.Screen name="ExploreScheduleDetail" component={ExploreScheduleDetailScene} />
    <Stack.Screen name="MyScheduleCreate" component={MyScheduleCreateScene} />
    <Stack.Screen name="MyScheduleEdit" component={MyScheduleEditScene} />
    <Stack.Screen name="MyScheduleRecipeMain" component={MyScheduleRecipeMainScene} />
    <Stack.Screen name="MyScheduleRecipeAlt" component={MyScheduleRecipeAltScene} />
    <Stack.Screen name="RecipeDetail" component={RecipeDetailScene} />
    <Stack.Screen name="RecipeComment" component={RecipeCommentScene} />
    <Stack.Screen name="Profile" component={ProfileScene} />
    <Stack.Screen name="MyAccount" component={MyAccountScene} />
  </Stack.Navigator>
);

/**
 * Recipe stack
 */
const RecipeStack = () => (
  <Stack.Navigator initialRouteName="MyRecipe" screenOptions={HeaderConfig}>
    <Stack.Screen name="MyRecipe" component={MyRecipeScene} />
    <Stack.Screen name="MyRecipeCreate" component={MyRecipeCreateScene} />
    <Stack.Screen name="MyRecipeEdit" component={MyRecipeEditScene} />
    <Stack.Screen name="MyRecipePublish" component={MyRecipePublishScene} />
    <Stack.Screen name="RecipeDetail" component={RecipeDetailScene} />
    <Stack.Screen name="RecipeComment" component={RecipeCommentScene} />
    <Stack.Screen name="Profile" component={ProfileScene} />
    <Stack.Screen name="MyAccount" component={MyAccountScene} />
  </Stack.Navigator>
);

/**
 * Bookmark stack
 */
const BookmarkStack = () => (
  <Stack.Navigator initialRouteName="Bookmark" screenOptions={HeaderConfig}>
    <Stack.Screen name="Bookmark" component={BookmarkScene} />
    <Stack.Screen name="RecipeDetail" component={RecipeDetailScene} />
    <Stack.Screen name="RecipeComment" component={RecipeCommentScene} />
    <Stack.Screen name="Profile" component={ProfileScene} />
    <Stack.Screen name="MyAccount" component={MyAccountScene} />
  </Stack.Navigator>
);

/**
 * Account stack
 */
const AccountStack = () => (
  <Stack.Navigator initialRouteName="MyAccount" screenOptions={HeaderConfig}>
    <Stack.Screen name="MyAccount" component={MyAccountScene} />
    <Stack.Screen name="ProfileEdit" component={ProfileEditScene} />
    <Stack.Screen name="ChangePassword" component={ChangePasswordScene} />
    <Stack.Screen name="RecipeBook" component={RecipeBookScene} />
    <Stack.Screen name="RecipeBookCreate" component={RecipeBookCreateScene} />
    <Stack.Screen name="RecipeBookEdit" component={RecipeBookEditScene} />
    <Stack.Screen name="RecipeBookDetail" component={RecipeBookDetailScene} />
    <Stack.Screen name="RecipeBookItems" component={RecipeBookItemsScene} />
    <Stack.Screen name="RecipeBookPublish" component={RecipeBookPublishScene} />
    <Stack.Screen name="MyMessage" component={MyMessageScene} />
    <Stack.Screen name="MyMessageDetail" component={MyMessageDetailScene} />
    <Stack.Screen name="Help" component={HelpScene} />
    <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScene} />
    <Stack.Screen name="Terms" component={TermsScene} />
    <Stack.Screen name="Faq" component={FaqScene} />
    <Stack.Screen name="GuideBook" component={GuideBookScene} />
    <Stack.Screen name="Settings" component={SettingsScene} />
    <Stack.Screen name="Login" component={LoginScene} />
    <Stack.Screen name="LoginForm" component={LoginFormScene} />
    <Stack.Screen name="Register" component={RegisterScene} />
    <Stack.Screen name="ResetPassword" component={ResetPasswordScene} />
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScene} />
    <Stack.Screen name="UserVerification" component={UserVerificationScene} />
  </Stack.Navigator>
);

const Routes = () => (
  <NavigationContainer ref={navigationRef}>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => {
          let icon;

          if (route.name === 'ExploreTabNavigator') {
            icon = 'explore';
          } else if (route.name === 'ScheduleTabNavigator') {
            icon = 'event';
          } else if (route.name === 'RecipeTabNavigator') {
            icon = 'developer-board';
          } else if (route.name === 'BookmarkTabNavigator') {
            icon = 'bookmark';
          } else {
            icon = 'account-circle';
          }

          return (
            <Icon type="MaterialIcons" name={icon} style={{ color: tintColor, fontSize: 20 }} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#e3e94a',
        inactiveTintColor: '#ffffff',
        labelStyle: { fontSize: 10 },
        style: { backgroundColor: '#e83249' },
      }}
    >
      <Tab.Screen
        name="Explore"
        component={ExploreStack}
        options={({ navigation }) => {
          let tabBarVisible = true;
          if (navigation.state.index > 0) {
            tabBarVisible = false;
          }
          return {
            title: 'Telusuri',
            tabBarVisible,
          };
        }}
      />
      <Tab.Screen
        name="MySchedule"
        component={ScheduleStack}
        options={({ navigation }) => {
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
            title: 'Jadwal',
            tabBarVisible,
          };
        }}
      />
      <Tab.Screen
        name="MyRecipe"
        component={RecipeStack}
        options={({ navigation }) => {
          let tabBarVisible = true;
          if (navigation.state.index > 0) {
            tabBarVisible = false;
          }
          return {
            title: 'Resep Saya',
            tabBarVisible,
          };
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={BookmarkStack}
        options={({ navigation }) => {
          let tabBarVisible = true;
          if (navigation.state.index > 0) {
            tabBarVisible = false;
          }
          return {
            title: 'Ditandai',
            tabBarVisible,
          };
        }}
      />
      <Tab.Screen
        name="MyAccount"
        component={AccountStack}
        options={{
          title: 'Akun',
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Routes;

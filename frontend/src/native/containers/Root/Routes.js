/**
 * containers/Root/Routes.js
 *
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, Text } from 'native-base';
import PropTypes from 'prop-types';

import { HeaderConfig } from './Options';
import { withTourGuide } from '../../providers/TourGuide';
import { navigationRef } from '../../helpers/NavigationService';
import ExploreScene from '../../scenes/Explore';
import WebviewScene from '../../scenes/Webview';
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
import ArticleScene from '../../scenes/Article';
import ArticleDetailScene from '../../scenes/ArticleDetail';
import CommunityScene from '../../scenes/Community';
import CommunityDetailScene from '../../scenes/CommunityDetail';
import TutorialScene from '../../scenes/Tutorial';
// import MyVoucherScene from '../../scenes/MyVoucher';
// import MyVoucherDetailScene from '../../scenes/MyVoucherDetail';

import LoginScene from '../../scenes/Login';
import LoginFormScene from '../../scenes/LoginForm';
import RegisterScene from '../../scenes/Register';
import ForgotPasswordScene from '../../scenes/ForgotPassword';
import ResetPasswordScene from '../../scenes/ResetPassword';
import UserVerificationScene from '../../scenes/UserVerification';
// import Debugger from '../../helpers/Debugger';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/**
 * Explore stack
 */
const ExploreStack = () => (
  <Stack.Navigator initialRouteName="Explore" screenOptions={HeaderConfig}>
    <Stack.Screen name="Explore" component={ExploreScene} />
    <Stack.Screen name="WebviewCampaign" component={WebviewScene} />
    <Stack.Screen name="ExploreFilter" component={ExploreFilterScene} />
    <Stack.Screen name="Search" component={SearchScene} />
    <Stack.Screen name="RecipeDetail" component={RecipeDetailScene} />
    <Stack.Screen name="RecipeComment" component={RecipeCommentScene} />
    <Stack.Screen name="Login" component={LoginScene} />
    <Stack.Screen name="LoginForm" component={LoginFormScene} />
    <Stack.Screen name="Register" component={RegisterScene} />
    <Stack.Screen name="Profile" component={ProfileScene} />
    <Stack.Screen name="MySchedule" component={MyScheduleScene} />
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
    <Stack.Screen
      name="MyRecipe"
      component={MyRecipeScene}
      options={{ headerShown: true, title: 'Resep Saya' }}
    />
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
    <Stack.Screen name="Bookmark" component={BookmarkScene} />
    <Stack.Screen name="RecipeDetail" component={RecipeDetailScene} />
    <Stack.Screen name="RecipeComment" component={RecipeCommentScene} />
    <Stack.Screen name="Profile" component={ProfileScene} />
    <Stack.Screen name="Community" component={CommunityScene} />
    <Stack.Screen name="CommunityDetail" component={CommunityDetailScene} />
    <Stack.Screen name="Tutorial" component={TutorialScene} />
    {/* <Stack.Screen name="MyVoucher" component={MyVoucherScene} />
    <Stack.Screen name="MyVoucherDetail" component={MyVoucherDetailScene} /> */}
  </Stack.Navigator>
);

/**
 * Article stack
 */
const ArticleStack = () => (
  <Stack.Navigator initialRouteName="Article" screenOptions={HeaderConfig}>
    <Stack.Screen name="Article" component={ArticleScene} />
    <Stack.Screen name="ArticleDetail" component={ArticleDetailScene} />
  </Stack.Navigator>
);

const linking = {
  prefixes: ['andalanmama://'],
  config: {
    initialRouteName: 'Explore',
    screens: {
      Explore: {
        path: 'explore'
      },
      Profile: {
        path: 'profile'
      },
      WebviewCampaign: {
        path: 'webview/:url/:title'
      }
    }
  }  
};

const Routes = ({ step, skipped }) => (
  <NavigationContainer linking={linking} ref={navigationRef} >
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ color }) => {
          let icon;
          let newColor = color;

          if (route.name === 'ExploreTab') {
            icon = 'explore';
          } else if (route.name === 'MyScheduleTab') {
            icon = 'event';
          } else if (route.name === 'MyRecipeTab') {
            icon = 'developer-board';
          } else if (route.name === 'ArticleTab') {
            icon = 'web';
          } else {
            icon = 'account-circle';
          }

          if (!skipped) {
            if ((step === 1 || step === 2) && route.name === 'ExploreTab') {
              newColor = '#e3e94a';
            } else if (step === 3 && route.name === 'MyScheduleTab') {
              newColor = '#e3e94a';
            } else if (step === 4 && route.name === 'MyRecipeTab') {
              newColor = '#e3e94a';
            } else if (step === 5 && route.name === 'ArticleTab') {
              newColor = '#e3e94a';
            } else if (step === 6 && route.name === 'MyAccountTab') {
              newColor = '#e3e94a';
            } else if (step > 0 && step < 7) {
              newColor = '#ffffff';
            }
          }

          return (
            <Icon type="MaterialIcons" name={icon} style={{ color: newColor, fontSize: 20 }} />
          );
        },
        // eslint-disable-next-line react/prop-types
        tabBarLabel: ({ color }) => {
          let title = '';
          let newColor = color;

          if (route.name === 'ExploreTab') {
            title = 'Telusuri';
          } else if (route.name === 'MyScheduleTab') {
            title = 'Jadwal';
          } else if (route.name === 'MyRecipeTab') {
            title = 'Resep Saya';
          } else if (route.name === 'ArticleTab') {
            title = 'Artikel';
          } else {
            title = 'Akun';
          }

          if (!skipped) {
            if ((step === 1 || step === 2) && route.name === 'ExploreTab') {
              newColor = '#e3e94a';
            } else if (step === 3 && route.name === 'MyScheduleTab') {
              newColor = '#e3e94a';
            } else if (step === 4 && route.name === 'MyRecipeTab') {
              newColor = '#e3e94a';
            } else if (step === 5 && route.name === 'ArticleTab') {
              newColor = '#e3e94a';
            } else if (step === 6 && route.name === 'MyAccountTab') {
              newColor = '#e3e94a';
            } else if (step > 0 && step < 7) {
              newColor = '#ffffff';
            }
          }
          return <Text style={{ color: newColor, fontSize: 10, marginBottom: 4 }}>{title}</Text>;
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
        name="ExploreTab"
        component={ExploreStack}
        options={{ title: 'Telusuri' }}
        listeners={({ navigation, route }) => ({
          tabPress: () => {
            if (route.state !== undefined) {
              navigation.navigate('Explore');
            }
          },
        })}
      />
      <Tab.Screen
        name="MyScheduleTab"
        component={ScheduleStack}
        options={{ title: 'Jadwal' }}
        listeners={({ navigation, route }) => ({
          tabPress: () => {
            if (route.state !== undefined) {
              navigation.navigate('MySchedule');
            }
          },
        })}
      />
      <Tab.Screen
        name="MyRecipeTab"
        component={RecipeStack}
        options={{ title: 'Resep Saya' }}
        listeners={({ navigation, route }) => ({
          tabPress: () => {
            if (route.state !== undefined) {
              navigation.navigate('MyRecipe');
            }
          },
        })}
      />
      <Tab.Screen
        name="ArticleTab"
        component={ArticleStack}
        options={{ title: 'Artikel' }}
        listeners={({ navigation, route }) => ({
          tabPress: () => {
            if (route.state !== undefined) {
              navigation.navigate('Article');
            }
          },
        })}
      />
      <Tab.Screen
        name="MyAccountTab"
        component={AccountStack}
        options={{
          title: 'Akun',
        }}
        listeners={({ navigation, route }) => ({
          tabPress: () => {
            if (route.state !== undefined) {
              navigation.navigate('MyAccount');
            }
          },
        })}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

Routes.propTypes = {
  step: PropTypes.number,
  skipped: PropTypes.bool,
};

export default withTourGuide(Routes);

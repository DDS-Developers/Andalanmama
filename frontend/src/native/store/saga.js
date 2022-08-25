/**
 * store/saga.js
 */
import { all } from 'redux-saga/effects';
import AuthSagas from './Auth/saga';
import MyRecipeSagas from './MyRecipe/saga';
import RecipeSagas from './Recipe/saga';
import RecipeBookSagas from './RecipeBook/saga';
import RecipeSelectSagas from './RecipeSelect/saga';
import BookmarkSagas from './Bookmark/saga';
import ExploreSagas from './Explore/saga';
import ExploreScheduleSagas from './ExploreSchedule/saga';
import UserSagas from './User/saga';
import FilterSagas from './Filter/saga';
import SearchSagas from './Search/saga';
import MyProfileSagas from './MyProfile/saga';
import TagSagas from './Tag/saga';
import MyScheduleSagas from './MySchedule/saga';
import MyScheduleItemSagas from './MyScheduleItem/saga';
import SettingSagas from './Setting/saga';
import MyMessageSagas from './MyMessage/saga';
import CommentsSagas from './Comments/saga';
import ArticleSagas from './Article/saga';
import CommunitySagas from './Community/saga';

export default function* rootSaga() {
  yield all([
    ...AuthSagas,
    ...MyRecipeSagas,
    ...RecipeSagas,
    ...RecipeBookSagas,
    ...RecipeSelectSagas,
    ...TagSagas,
    ...BookmarkSagas,
    ...ExploreSagas,
    ...UserSagas,
    ...FilterSagas,
    ...SearchSagas,
    ...MyProfileSagas,
    ...ExploreScheduleSagas,
    ...MyScheduleSagas,
    ...MyScheduleItemSagas,
    ...SettingSagas,
    ...MyMessageSagas,
    ...CommentsSagas,
    ...ArticleSagas,
    ...CommunitySagas,
  ]);
}

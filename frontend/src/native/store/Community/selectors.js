/**
 * Community/selectors.js
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCommunity = state => state.get('Community', initialState);

const makeSelectCommunityHighlight = () =>
  createSelector(
    selectCommunity,
    CommunityState => CommunityState.get('highlight'),
  );

const makeSelectLoadingHighlight = () =>
  createSelector(
    selectCommunity,
    CommunityState => CommunityState.get('loadingHighlight'),
  );

const makeSelectCommunityThread = () =>
  createSelector(
    selectCommunity,
    CommunityState => CommunityState.get('thread'),
  );

const makeSelectLoadingThread = () =>
  createSelector(
    selectCommunity,
    CommunityState => CommunityState.get('loadingThread'),
  );

const makeSelectCommunityDetail = () =>
  createSelector(
    selectCommunity,
    CommunityState => CommunityState.get('detail'),
  );

const makeSelectLoadingDetail = () =>
  createSelector(
    selectCommunity,
    CommunityState => CommunityState.get('loadingDetail'),
  );

const makeSelectId = () =>
  createSelector(
    selectCommunity,
    CommunityState => CommunityState.get('id'),
  );

const makeSelectLoadingReply = () =>
  createSelector(
    selectCommunity,
    CommunityState => CommunityState.get('loadingReply'),
  );

const makeSelectReply = () =>
  createSelector(
    selectCommunity,
    CommunityState => CommunityState.get('reply'),
  );

export {
  selectCommunity,
  makeSelectCommunityHighlight,
  makeSelectLoadingHighlight,
  makeSelectCommunityThread,
  makeSelectLoadingThread,
  makeSelectCommunityDetail,
  makeSelectLoadingDetail,
  makeSelectId,
  makeSelectReply,
  makeSelectLoadingReply,
};

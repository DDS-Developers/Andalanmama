/**
 * ARTICLE/actions.js
 */
import {
  LOAD_ARTICLE_HIGHLIGHT,
  SET_ARTICLE_HIGHLIGHT,
  SET_LOADING_HIGHLIGHT,
  LOAD_ARTICLE_LATEST,
  SET_ARTICLE_LATEST,
  SET_LOADING_LATEST,
} from './constants';

/**
 * Load article highlight
 *
 * @return {object}
 */
export function loadArticleHighlight() {
  return {
    type: LOAD_ARTICLE_HIGHLIGHT,
  };
}

/**
 * Set article highlight
 *
 * @param {object} data
 * @return {object}
 */
export function setArticleHighlight(data) {
  return {
    type: SET_ARTICLE_HIGHLIGHT,
    data,
  };
}

/**
 * Set highlight loading
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function setLoadingHighlight(status) {
  return {
    type: SET_LOADING_HIGHLIGHT,
    status,
  };
}

/**
 * Load article Latest
 *
 * @return {object}
 */
export function loadArticleLatest(page) {
  return {
    type: LOAD_ARTICLE_LATEST,
    page,
  };
}

/**
 * Set article Latest
 *
 * @param {object} data
 * @return {object}
 */
export function setArticleLatest(data) {
  return {
    type: SET_ARTICLE_LATEST,
    data,
  };
}

/**
 * Set latest loading
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function setLoadingLatest(status) {
  return {
    type: SET_LOADING_LATEST,
    status,
  };
}

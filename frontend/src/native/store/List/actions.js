/**
 * List/actions.js
 */
import {
  SET_ITEMS,
  ADD_ITEMS,
  ADD_ITEM,
  UPDATE_ITEM,
  REMOVE_ITEM,
  SET_SELECTED_ID,
  SET_SELECTED,
  SET_LOADING,
  CLEAR_LIST,
  SET_TOTAL,
  SET_PAGED,
} from './constants';

/**
 * Set items
 *
 * @param {array} items
 * @return {object}
 */
export function setItems(items) {
  return {
    type: SET_ITEMS,
    items,
  };
}

/**
 * Add items
 *
 * @param {array} items
 * @return {object}
 */
export function addItems(items) {
  return {
    type: ADD_ITEMS,
    items,
  };
}

/**
 * Add item
 *
 * @param {object} item
 * @return {object}
 */
export function addItem(item) {
  return {
    type: ADD_ITEM,
    item,
  };
}

/**
 * Update item
 *
 * @param {number} id
 * @param {object} data
 * @return {object}
 */
export function updateItem(id, data) {
  return {
    type: UPDATE_ITEM,
    id,
    data,
  };
}

/**
 * Remove item
 *
 * @param {number} id
 * @return {object}
 */
export function removeItem(id) {
  return {
    type: REMOVE_ITEM,
    id,
  };
}

/**
 * Set selected id
 *
 * @param  {number} id
 * @return {object}
 */
export function setSelectedId(id) {
  return {
    type: SET_SELECTED_ID,
    id,
  };
}

/**
 * Set selected
 *
 * @param  {object} data
 * @return {object}
 */
export function setSelected(data) {
  return {
    type: SET_SELECTED,
    data,
  };
}

/**
 * Set total
 *
 * @param  {number} total
 * @return {object}
 */
export function setTotal(total) {
  return {
    type: SET_TOTAL,
    total,
  };
}

/**
 * Set paged
 *
 * @param  {number} paged
 * @return {object}
 */
export function setPaged(paged) {
  return {
    type: SET_PAGED,
    paged,
  };
}

/**
 * Set loading
 *
 * @param  {boolean} status
 * @return {object}
 */
export function setLoading(status) {
  return {
    type: SET_LOADING,
    status,
  };
}

/**
 * Clear list
 *
 * @return {object}
 */
export function clearList() {
  return {
    type: CLEAR_LIST,
  };
}

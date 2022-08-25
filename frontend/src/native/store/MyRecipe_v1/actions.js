/**
 * MyRecipe/actions.js
 */
import {
  LOAD_RECIPES,
  LOAD_RECIPE,
  SET_RECIPE,
  CREATE_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE,
  CHANGE_FILTER_STATUS,
  SET_FORM_DATA,
  CHANGE_FORM_DATA,
  SET_INPUT_ERRORS,
  CHANGE_INPUT_ERROR,
  CHECK_INPUT_ERROR,
  CHECK_INPUT_ERRORS,
  RESET_FORM_DATA,
  CLEAR_INPUT_ERRORS,
  RESET_DATA,
  SET_TAGS,
  ADD_TAG,
  REMOVE_TAG,
  SET_STEPS,
  SET_STEPS_ORDER,
  ADD_STEP,
  UPDATE_STEP,
  REMOVE_STEP,
  SET_INGREDIENTS,
  SET_INGREDIENTS_ORDER,
  ADD_INGREDIENT,
  UPDATE_INGREDIENT,
  REMOVE_INGREDIENT,
} from './constants';

/**
 * Load recipes
 *
 * @return {object}
 */
export function loadRecipes() {
  return {
    type: LOAD_RECIPES,
  };
}

/**
 * Load recipe
 *
 * @param {number} id
 * @return {object}
 */
export function loadRecipe(id) {
  return {
    type: LOAD_RECIPE,
    id,
  };
}

/**
 * Set recipe
 *
 * @param {object} data
 * @return {object}
 */
export function setRecipe(data) {
  return {
    type: SET_RECIPE,
    data,
  };
}

/**
 * Create recipe
 *
 * @return {object}
 */
export function createRecipe() {
  return {
    type: CREATE_RECIPE,
  };
}

/**
 * Update recipe
 *
 * @return {object}
 */
export function updateRecipe() {
  return {
    type: UPDATE_RECIPE,
  };
}

/**
 * Set items
 *
 * @param number id
 * @return {object}
 */
export function deleteRecipe(id) {
  return {
    type: DELETE_RECIPE,
    id,
  };
}

/**
 * Change filter status
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function changeFilterStatus(status) {
  return {
    type: CHANGE_FILTER_STATUS,
    status,
  };
}

/**
 * Set form data
 *
 * @param {object} data
 * @return {object}
 */
export function setFormData(data) {
  return {
    type: SET_FORM_DATA,
    data,
  };
}

/**
 * Change form data
 *
 * @param {string} name
 * @param {string} value
 * @return {object}
 */
export function changeFormData(name, value) {
  return {
    type: CHANGE_FORM_DATA,
    name,
    value,
  };
}

/**
 * Set input errors
 *
 * @param {object} errors
 * @return {object}
 */
export function setInputErrors(errors) {
  return {
    type: SET_INPUT_ERRORS,
    errors,
  };
}

/**
 * Change input error
 *
 * @param {string} name
 * @param {string|bool} error
 * @return {object}
 */
export function changeInputError(name, error) {
  return {
    type: CHANGE_INPUT_ERROR,
    name,
    error,
  };
}

/**
 * Check input error
 *
 * @param {string} name
 * @return {object}
 */
export function checkInputError(name) {
  return {
    type: CHECK_INPUT_ERROR,
    name,
  };
}

/**
 * Check input errors
 *
 * @return {object}
 */
export function checkInputErrors() {
  return {
    type: CHECK_INPUT_ERRORS,
  };
}

/**
 * Reset form data
 *
 * @return {object}
 */
export function resetFormData() {
  return {
    type: RESET_FORM_DATA,
  };
}

/**
 * Clear input errors
 *
 * @return {object}
 */
export function clearInputErrors() {
  return {
    type: CLEAR_INPUT_ERRORS,
  };
}

/**
 * Reset data
 *
 * @return {object}
 */
export function resetData() {
  return {
    type: RESET_DATA,
  };
}

/**
 * Set tags
 *
 * @param {array} tags
 * @return {object}
 */
export function setTags(tags) {
  return {
    type: SET_TAGS,
    tags,
  };
}

/**
 * Add tag
 *
 * @param {object} tag
 * @return {object}
 */
export function addTag(tag) {
  return {
    type: ADD_TAG,
    tag,
  };
}

/**
 * Remove tag
 *
 * @param {number} id
 * @return {object}
 */
export function removeTag(id) {
  return {
    type: REMOVE_TAG,
    id,
  };
}

/**
 * Set steps
 *
 * @param {array} steps
 * @return {object}
 */
export function setSteps(steps) {
  return {
    type: SET_STEPS,
    steps,
  };
}

/**
 * Set steps order
 *
 * @param {array} order
 * @return {object}
 */
export function setStepsOrder(order) {
  return {
    type: SET_STEPS_ORDER,
    order,
  };
}

/**
 * Add step
 *
 * @param {object} step
 * @return {object}
 */
export function addStep(step) {
  return {
    type: ADD_STEP,
    step,
  };
}

/**
 * Update step
 *
 * @param {number} id
 * @param {object} data
 * @return {object}
 */
export function updateStep(id, data) {
  return {
    type: UPDATE_STEP,
    id,
    data,
  };
}

/**
 * Remove step
 *
 * @param {number} id
 * @return {object}
 */
export function removeStep(id) {
  return {
    type: REMOVE_STEP,
    id,
  };
}

/**
 * Set ingredients
 *
 * @param {array} ingredients
 * @return {object}
 */
export function setIngredients(ingredients) {
  return {
    type: SET_INGREDIENTS,
    ingredients,
  };
}

/**
 * Set ingredients order
 *
 * @param {array} order
 * @return {object}
 */
export function setIngredientsOrder(order) {
  return {
    type: SET_INGREDIENTS_ORDER,
    order,
  };
}

/**
 * Add ingredient
 *
 * @param {object} ingredient
 * @return {object}
 */
export function addIngredient(ingredient) {
  return {
    type: ADD_INGREDIENT,
    ingredient,
  };
}

/**
 * Update ingredient
 *
 * @param {number} id
 * @param {object} data
 * @return {object}
 */
export function updateIngredient(id, data) {
  return {
    type: UPDATE_INGREDIENT,
    id,
    data,
  };
}

/**
 * Remove ingredient
 *
 * @param {number} id
 * @return {object}
 */
export function removeIngredient(id) {
  return {
    type: REMOVE_INGREDIENT,
    id,
  };
}

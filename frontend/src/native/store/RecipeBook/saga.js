/**
 * RecipeBook/saga.js
 */
import { takeLatest, put, select, call } from 'redux-saga/effects';
import collectionService from '../../services/api/collection';
import * as NavigationService from '../../helpers/NavigationService';
import { setLoading as setAppLoading, showAlert, responseError } from '../App/actions';
import {
  setLoading as setListLoading,
  setItems,
  addItem,
  updateItem,
  removeItem,
  addItems,
} from '../List/actions';
import {
  LOAD_RECIPE_BOOKS,
  LOAD_MORE_RECIPE_BOOKS,
  LOAD_RECIPE_BOOK,
  CREATE_RECIPE_BOOK,
  UPDATE_RECIPE_BOOK,
  DELETE_RECIPE_BOOK,
  DELETE_RECIPE,
} from './constants';
import { setLoading as setManageLoading, setRecipeBook, removeRecipe } from './actions';
import {
  makeSelectId,
  makeSelectSaveType,
  makeSelectTitle,
  makeSelectStatus,
  makeSelectRecipes,
  makeSelectRecipeId,
  makeSelectFilterStatus,
} from './selectors';
import { makeSelectPaged } from '../List/selectors';

/**
 * Init load recipes book
 */
export function* initLoadRecipeBooks() {
  yield put(setListLoading(true));
  const status = yield select(makeSelectFilterStatus());
  try {
    const response = yield call(collectionService.userCollections, status);
    yield put(setItems(response.data.data));
  } catch (err) {
    yield put(responseError(err, 'Error get recipe books'));
  } finally {
    yield put(setListLoading(false));
  }
}

/**
 * Init load more recipes book
 */
export function* initLoadMoreRecipeBooks() {
  const status = yield select(makeSelectFilterStatus());
  const page = yield select(makeSelectPaged());
  try {
    const response = yield call(collectionService.userCollections, status, page);
    yield put(addItems(response.data.data));
  } catch (err) {
    yield put(responseError(err, 'Error get recipe books'));
  }
}

/**
 * Init load recipe book
 */
export function* initLoadRecipeBook() {
  const id = yield select(makeSelectId());
  yield put(setManageLoading(true));
  try {
    const response = yield call(collectionService.detail, id);
    yield put(setRecipeBook(response.data));
  } catch (err) {
    yield put(responseError(err, 'Error get recipe book'));
  } finally {
    yield put(setManageLoading(false));
  }
}

/**
 * Init create recipe book
 */
export function* initCreateRecipeBook() {
  yield put(setManageLoading(true));

  try {
    const saveType = yield select(makeSelectSaveType());
    const title = yield select(makeSelectTitle());
    const status = yield select(makeSelectStatus());
    const recipes = yield select(makeSelectRecipes());
    const formData = yield call(getFormData, title, status, recipes);

    const response = yield call(collectionService.create, formData);
    yield put(addItem(response.data));

    console.log(saveType)

    if (saveType === 'normal') {
      yield call(NavigationService.navigate, 'RecipeBook');
      yield put(showAlert('Kamu berhasil membuat buku resep!', 'Berhasil'));
    } else if (saveType === 'publish') {
      yield put(
        showAlert(
          'Buku resep menunggu approval untuk dipublikasikan, cek status resep',
          'Berhasil',
          {
            label: 'Buku Resep Saya',
            target: 'RecipeBook',
          },
        ),
      );
    } else if (saveType === 'save_draft') {
      yield call(NavigationService.goBack);
    }
  } catch (err) {
    yield put(responseError(err, 'Error create recipe book'));
  } finally {
    yield put(setManageLoading(false));
  }
}

/**
 * Init update recipe book
 */
export function* initUpdateRecipeBook() {
  yield put(setManageLoading(true));

  try {
    const id = yield select(makeSelectId());
    const saveType = yield select(makeSelectSaveType());
    const title = yield select(makeSelectTitle());
    const status = yield select(makeSelectStatus());
    const recipes = yield select(makeSelectRecipes());
    const formData = yield call(getFormData, title, status, recipes);

    const response = yield call(collectionService.update, id, formData);
    yield put(updateItem(id, response.data));

    if (saveType === 'normal') {
      yield call(NavigationService.navigate, 'RecipeBook');
      yield put(showAlert('Success update recipe book', 'Berhasil'));
    } else if (saveType === 'publish') {
      yield put(
        showAlert('Resep menunggu approval untuk dipublikasikan, cek status resep', 'Berhasil', {
          label: 'Resep Saya',
          target: 'MyRecipe',
        }),
      );
    }
  } catch (err) {
    yield put(responseError(err, 'Error update recipe book'));
  } finally {
    yield put(setManageLoading(false));
  }
}

/**
 * Init delete recipe book
 */
export function* initDeleteRecipeBook() {
  yield put(setAppLoading(true));
  try {
    const id = yield select(makeSelectId());
    yield call(collectionService.delete, id);
    yield put(removeItem(id));
    yield put(showAlert('Success delete recipe book', 'Berhasil'));
  } catch (err) {
    yield put(responseError(err, 'Gagal menghapus buku resep'));
  } finally {
    yield put(setAppLoading(false));
  }
}

/**
 * Init delete book recipe
 */
export function* initDeleteRecipe() {
  yield put(setAppLoading(true));
  try {
    const id = yield select(makeSelectId());
    const recipeId = yield select(makeSelectRecipeId());
    yield call(collectionService.deleteRecipe, id, recipeId);
    yield put(removeRecipe(id));
    yield put(showAlert('Success delete recipe', 'Berhasil'));
  } catch (err) {
    yield put(responseError(err, 'Gagal menghapus resep'));
  } finally {
    yield put(setAppLoading(false));
  }
}

function getFormData(title, status, listRecipes) {
  const formData = {};
  const recipes = [];
  if (listRecipes && listRecipes.count() > 0) {
    listRecipes.forEach(item => {
      recipes.push(item.get('id'));
    });
  }
  formData.title = title;
  formData.recipes = recipes;
  formData.status = status ? 1 : 0;

  return formData;
}

export default [
  takeLatest(LOAD_RECIPE_BOOKS, initLoadRecipeBooks),
  takeLatest(LOAD_MORE_RECIPE_BOOKS, initLoadMoreRecipeBooks),
  takeLatest(LOAD_RECIPE_BOOK, initLoadRecipeBook),
  takeLatest(CREATE_RECIPE_BOOK, initCreateRecipeBook),
  takeLatest(UPDATE_RECIPE_BOOK, initUpdateRecipeBook),
  takeLatest(DELETE_RECIPE_BOOK, initDeleteRecipeBook),
  takeLatest(DELETE_RECIPE, initDeleteRecipe),
];

import { fromJS } from 'immutable';

export default {
  formData: fromJS({
    photo: '',
    name: '',
    description: '',
    portion: '',
    time: '',
    tags: [],
    steps: [
      {
        id: 1,
        step: 1,
        title: '',
        description: '',
        image: '',
        attachment: '',
      },
    ],
    ingredients: [{ id: 1, ingredient: '', type: 'ingredient' }],
    status: false,
  }),
  inputErrors: fromJS({
    photo: false,
    title: false,
    description: false,
    portion: false,
    duration: false,
    tags: false,
    steps: false,
    ingredients: false,
  }),
  showUnmountConfirm: false,
  showIncompleteConfirm: false,
  showDraftConfirm: false,
  changeData: false,
  showSortingStep: false,
  showSortingIngredient: false,
};

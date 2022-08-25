export const validationConfig = {
  comments: {
    presence: {
      message: '^Please enter your comment',
    },
    length: {
      minimum: 10,
      message: '^Your comment must be at least 10 characters',
    },
  },
};

// *** Sample code for validate js datetime ***
// import validate from 'validate.js';
// import moment from 'moment';
// validate.extend(validate.validators.datetime, {
//   // The value is guaranteed not to be null or undefined but otherwise it
//   // could be anything.
//   parse(value) {
//     return +moment.utc(value, 'YYYY-MM-DD');
//   },
//   // Input is a unix timestamp
//   format(value, options) {
//     const format = options.dateOnly ? 'YYYY-MM-DD' : 'YYYY-MM-DD hh:mm:ss';
//     return moment.utc(value).format(format);
//   },
// });

export const validationConfig = {
  title: {
    presence: {
      message: '^Please enter schedule title',
    },
  },
  date: {
    presence: {
      message: '^Please enter schedule date',
    },
    // *** Sample code for validate js datetime ***
    // datetime: {
    //   dateOnly: true,
    //   earliest: moment.utc().subtract(1, 'days'),
    //   message: '^Minimum date select is present date',
    // },
  },
  shift: {
    presence: {
      message: '^Please select schedule shift',
    },
  },
  time: {
    presence: {
      message: '^Please select schedule time',
    },
  },
  recipeMain: {
    presence: {
      message: '^Please select main recipe',
    },
  },
  recipeOthers: {
    presence: {
      message: '^Please select one or more complementary recipe ',
      allowEmpty: false,
    },
  },
};

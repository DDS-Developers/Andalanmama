export const validationConfig = {
  fullname: {
    presence: {
      message: '^Please enter full name',
    },
  },
  username: {
    presence: {
      message: '^Please enter username',
    },
  },
  email: {
    presence: {
      message: '^Please enter email',
    },
    email: {
      message: '^Please enter valid email address',
    },
  },
  birthday: {
    presence: {
      message: '^Please select your birthday',
    },
  },
  phone: {
    format: {
      pattern: '^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-s./0-9]*$',
      flags: 'g',
      message: '^Please enter a phone number',
    },
  },
  address: {
    presence: {
      message: '^Please enter address',
    },
  },
};

export const validationConfig = {
  currentPassword: {
    presence: {
      message: '^Please enter your current password',
    },
    length: {
      minimum: 6,
      message: '^Your password must be at least 6 characters',
    },
  },
  password: {
    presence: {
      message: '^Please enter a password',
    },
    format: {
      // eslint-disable-next-line no-useless-escape
      pattern: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$',
      flags: 'g',
      message: '^Password harus mengandung angka, huruf kecil dan huruf besar',
    },
    length: {
      minimum: 6,
      message: '^Your password must be at least 6 characters',
    },
  },
  passwordConfirmation: {
    presence: {
      message: '^Please enter password confirmation',
    },
    equality: {
      attribute: 'password',
      message: '^Password is not equal',
    },
  },
};

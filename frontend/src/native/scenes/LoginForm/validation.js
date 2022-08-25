export const validationConfig = {
  email: {
    presence: {
      message: '^Please enter email',
    },
    email: {
      message: '^Please enter valid email address',
    },
  },
  password: {
    presence: {
      message: '^Silahkan masukkan kata sandi',
    },
    length: {
      minimum: 6,
      message: '^Kata sandi minimal 6 karakter',
    },
  },
};

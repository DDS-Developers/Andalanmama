/* eslint-disable prettier/prettier */
export const validationConfig = {
  fullname: {
    presence: {
      message: '^Silahkan masukkan nama lengkap',
    },
  },
  username: {
    presence: {
      message: '^Silahkan masukkan nama pengguna',
    },
  },
  email: {
    presence: {
      message: '^Silahkan masukkan alamat email',
    },
    email: {
      message: '^Silahkan masukkan alamat email yang valid',
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
    format: {
      pattern: '^(?=.*?[a-z])(?=.*?[0-9]).{6,}$',
      flags: 'g',
      message: '^Kata sandi harus terdapat angka dan huruf',
    },
  },
  passwordConfirmation: {
    presence: {
      message: '^Silahkan konfirmasi kata sandi anda',
    },
    equality: {
      attribute: 'password',
      message: '^Kata Sandi yang dimasukkan tidak sesuai',
    },
  },
};

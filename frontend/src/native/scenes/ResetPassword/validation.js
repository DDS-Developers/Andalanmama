export const validationConfig = {
  code: {
    presence: {
      message: '^Silahkan masukkan kode',
    },
    length: {
      is: 6,
      message: '^Kode anda minimal 6 karakter',
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
      pattern: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$',
      flags: 'g',
      message: '^Kata sandi harus terdapat angka, huruf besar dan huruf kecil',
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

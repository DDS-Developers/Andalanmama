import { Http } from '../http';

export default {
  upload(formData) {
    return Http.post('upload', formData);
  },
};

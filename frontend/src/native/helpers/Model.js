/*
 * model.js
 */
import moment from 'moment';
import 'moment/locale/id';

const model = {
  getResponseData(response) {
    return response.data;
  },

  getResponseList(response) {
    return response.data.data;
  },

  getDay(date) {
    const dayNow = moment()
      .locale('id')
      .format('ddd')
      .toUpperCase();
    if (date) {
      return moment(date, 'YYYY-MM-DD')
        .locale('id')
        .format('ddd')
        .toUpperCase();
    }
    return dayNow;
  },
  getDate(date) {
    const dateNow = moment().date();
    if (date) {
      return moment(date, 'YYYY-MM-DD').date();
    }
    return dateNow;
  },
};

export default model;

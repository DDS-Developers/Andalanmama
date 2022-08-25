import { Http } from '../http';

export default {
  getSchedulesToday() {
    return Http.get('schedule/today');
  },

  getSchedulesTomorrow() {
    return Http.get('schedule/tomorrow');
  },

  getSchedules(page = 1) {
    return Http.get(`schedule/explore?page=${page}`);
  },

  getFilterSchedules(data, page = 1) {
    return Http.post(`schedule/today?page=${page}`, data);
  },

  getDetailSchedule(data) {
    return Http.post('schedule/view', data);
  },
};

import { Http } from '../http';

export default {
  mySchedule() {
    return Http.get(`schedule/all`);
  },

  myScheduleSearch(date) {
    return Http.get(`schedule/find`, date);
  },

  detail(id) {
    return Http.get(`profile/schedule/${id}`);
  },

  create(data) {
    return Http.post('profile/schedule', data);
  },

  update(id, data) {
    return Http.put(`profile/schedule/${id}`, data);
  },

  updateTitle(data) {
    return Http.post(`profile/schedule/title`, data);
  },

  updateStatus(data) {
    return Http.post(`profile/schedule/status`, data);
  },

  delete(id) {
    return Http.delete(`profile/schedule/${id}`);
  },

  addToMySchedules(date, userId) {
    return Http.post('schedule/copy', { date, user_id: userId });
  },

  checkScheduleDate(date) {
    return Http.post('schedule/check', { date });
  },
};

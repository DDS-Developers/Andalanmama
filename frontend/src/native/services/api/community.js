import { Http } from '../http';

export default {
  getCommunityHighlight() {
    return Http.get('forum/highlight');
  },
  getCommunityThread() {
    return Http.get('forum');
  },
  getCommunityDetail(id) {
    return Http.get(`forum/${id}`);
  },
  addCommunityReply(reply) {
    return Http.post(`forum/reply/${reply.id}`, {
      body: reply.body,
    });
  },
};

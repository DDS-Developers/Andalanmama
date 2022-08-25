import axios from 'axios';
import qs from 'qs';
import store from 'store';

export const getBaseUrl = mode => {
  switch (mode) {
    case 'production':
      // return 'https://api-beta.andalanmama.com/';
      return 'https://api.andalanmama.com/';
    case 'staging':
      return 'https://api-andalan-mama.froyostory.com/';
    default:
      // return 'http://localhost:8000/';
      return 'https://api.andalanmama.com/';
  }
};

export const BaseUrl = getBaseUrl(process.env.NODE_ENV);

export const Http = {
  // perform axios request
  request(method, url, data, headers = {}) {
    // disable set body data on get requests, IOS 13 limitations is not allowed
    // to add body data when the action sent 'GET' requests
    // see //stackoverflow.com/questions/56955595/1103-error-domain-nsurlerrordomain-code-1103-resource-exceeds-maximum-size-i
    if (method === 'get') {
      return axios.request({
        url,
        method,
        headers: Object.assign(
          {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          headers,
        ),
      });
    }

    // the rest of other request methods
    return axios.request({
      url,
      data: qs.stringify(data),
      method,
      headers: Object.assign(
        {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        headers,
      ),
    });
  },

  get(url) {
    return this.request('get', url, {});
  },

  post(url, data, headers = {}) {
    return this.request('post', url, data, headers);
  },

  put(url, data) {
    return this.request('put', url, data);
  },

  delete(url, data = {}) {
    return this.request('delete', url, data);
  },

  init() {
    // Need to updated base on url
    axios.defaults.baseURL = BaseUrl;

    // Intercept the request to make sure the token is injected into the header.
    axios.interceptors.request.use(config => {
      // we intercept axios request and add authorizatio header before perform send a request to the server
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${store.get('jwt-token')}`;
      return config;
    });

    // Intercept the response and…
    axios.interceptors.response.use(
      response => {
        // …get the token from the header or response data if exists, and save it.
        const token = response.headers.Authorization || response.data.token;
        token && store.set('jwt-token', token);

        return response;
      },
      error => {
        // Also, if we receive a Bad Request / Unauthorized error
        if (error.response.status === 400 || error.response.status === 401) {
          // and we're not trying to login
        }

        return Promise.reject(error);
      },
    );
  },

  setupToken() {
    // Intercept the request to make sure the token is injected into the header.
    axios.interceptors.request.use(config => {
      // we intercept axios request and add authorizatio header before perform send a request to the server
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${store.get('jwt-token')}`;
      return config;
    });
  },
};

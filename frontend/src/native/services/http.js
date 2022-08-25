import axios from 'axios';
// import qs from 'qs';
import AsyncStorage from '@react-native-community/async-storage';

export const getBaseUrl = mode => {
  switch (mode) {
    case 'production':
      // return 'http://api-andalan-mama.froyostory.com/';
      // return 'https://api-beta.andalanmama.com/';
      return 'https://api.andalanmama.com/';

    default:
      // return 'http://192.168.1.4:8000/';
      return 'https://api.andalanmama.com/';
    // return 'http://api-andalan-mama.froyostory.com/';
  }
};

export const BaseUrl = getBaseUrl(process.env.NODE_ENV);
const HeaderConfig = {
  'X-Requested-With': 'XMLHttpRequest',
  Accept: 'application/json',
};

export const Http = {
  // perform axios request
  request(method, url, data, headers = {}) {
    // disable set body data on get requests, IOS 13 limitations is not allowed
    // to add body data when the action sent 'GET' requests
    // see https://stackoverflow.com/questions/56955595/1103-error-domain-nsurlerrordomain-code-1103-resource-exceeds-maximum-size-i
    if (method === 'get') {
      return axios.request({
        url,
        method,
        headers: Object.assign(HeaderConfig, headers),
      });
    }

    // the rest of other request methods
    const apiData = data instanceof FormData ? data : data;
    return axios.request({
      url,
      data: apiData,
      method,
      headers: Object.assign(HeaderConfig, headers),
    });
  },

  get(url, headers = {}) {
    return this.request('get', url, {}, headers);
  },

  post(url, data, headers = {}) {
    return this.request('post', url, data, headers);
  },

  put(url, data, headers = {}) {
    return this.request('put', url, data, headers);
  },

  delete(url, data = {}, headers = {}) {
    return this.request('delete', url, data, headers);
  },

  init() {
    // Need to updated base on url
    axios.defaults.baseURL = BaseUrl;

    // Intercept the request to make sure the token is injected into the header.
    axios.interceptors.request.use(async config => {
      const token = await AsyncStorage.getItem('ANDALAN_USER_TOKEN');
      // we intercept axios request and add authorizatio header before perform send a request to the server
      if (token) {
        // eslint-disable-next-line no-param-reassign
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    // Intercept the response and…
    axios.interceptors.response.use(
      async response => {
        // …get the token from the header or response data if exists, and save it.
        const token = response.headers.Authorization || response.data.token;
        if (token) {
          await AsyncStorage.setItem('ANDALAN_USER_TOKEN', token);
        }

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
    axios.interceptors.request.use(async config => {
      const token = await AsyncStorage.getItem('ANDALAN_USER_TOKEN');
      // we intercept axios request and add authorizatio header before perform send a request to the server
      if (token) {
        // eslint-disable-next-line no-param-reassign
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  },

  resetToken() {
    // Intercept the request to make sure the token is injected into the header.
    axios.interceptors.request.use(config => {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = null;
      return config;
    });
  },
};

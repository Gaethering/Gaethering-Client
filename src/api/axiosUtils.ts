import axios from 'axios';
import { API_BASE_URL } from '../data/API_ENV';
import { postReToken } from './authAPI';
import { JWTToken } from './authAPI.type';

export function setAxiosDefaultsConfig() {
  axios.defaults.baseURL = API_BASE_URL;
  axios.defaults.headers.common['timeout'] = 3000;
  setAxiosIntercept();
}

export function setAxiosHeaderToken(token: JWTToken) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

export function getAccessToken(): JWTToken {
  const token = axios.defaults.headers.common['Authorization'];
  if (!token) {
    return '';
  }

  return token.toString().split(' ')[1];
}

function getTokenExpirationDate(token: JWTToken) {
  if (!token) {
    return '';
  }
  const info = JSON.parse(window.atob(token.split('.')[1]));
  const expDate = info.exp as number;

  return new Date(expDate * 1000);
}

function setAxiosIntercept() {
  axios.interceptors.request.use(async (config) => {
    if (
      getTokenExpirationDate(getAccessToken()) <
      new Date(Date.now() + 2 * 60000)
    ) {
      await postReToken();

      //! Test
      console.log(config);
      console.log(
        'Retoken!',
        getTokenExpirationDate(getAccessToken()),
        new Date(Date.now() + 2 * 60000)
      );
      ////Test
    }
    return config;
  });
}

import axios from 'axios';
import { API_BASE_URL } from '../data/API_ENV';
import { JWTToken } from './authAPI.type';

export function setAxiosDefaultsConfig() {
  axios.defaults.baseURL = API_BASE_URL;
  axios.defaults.headers.common['timeout'] = 3000;
}

export function setAxiosHeaderToken(token: JWTToken) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

export function getAccessToken(): JWTToken {
  const token = axios.defaults.headers.common['Athorization'];
  if (!token) {
    return '';
  }

  return token.toString().split(' ')[1];
}

export function getTokenExpireDate(token: JWTToken) {
  
}
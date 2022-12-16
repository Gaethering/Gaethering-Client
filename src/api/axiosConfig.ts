import axios from 'axios';
import { API_BASE_URL } from '../data/API_ENV';
import { JWTToken } from './authAPI.type';

export function setAxiosDefaultsBaseURL() {
  axios.defaults.baseURL = API_BASE_URL;
}

export function setAxiosHeaderToken(token: JWTToken) {
  axios.defaults.headers.common['Authorization'] = token;
}

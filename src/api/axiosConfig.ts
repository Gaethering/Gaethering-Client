import axios from 'axios';
import { API_BASE_URL } from '../data/API_ENV';

export const axiosDefaultsConfig = () => {
  axios.defaults.baseURL = API_BASE_URL;
};

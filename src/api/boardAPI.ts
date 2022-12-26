import axios, { AxiosResponse } from 'axios';
import { API_BASE_URL } from '../data/API_ENV';
import * as T from './boardAPI.type';

export async function postQnaArticle(data: FormData) {
  const response = await axios.post<
    T.PostArticleResponse,
    AxiosResponse<T.PostArticleResponse, FormData>,
    FormData
  >(T.BoardApiUrl.PostArticle + '1', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    baseURL: API_BASE_URL,
  });
  return response.data;
}
export async function postInfoArticle(data: FormData) {
  const response = await axios.post<
    T.PostArticleResponse,
    AxiosResponse<T.PostArticleResponse, FormData>,
    FormData
  >(T.BoardApiUrl.PostArticle + '2', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    baseURL: API_BASE_URL,
  });
  return response.data;
}

import { API_BASE_URL } from '../data/API_ENV';
import * as T from './boardAPI.type';
import { postRequest } from './requests';

export function postArticle(data: FormData) {
  const response = postRequest<T.PostArticleResponse, FormData>(
    T.BoardApiUrl.PostArticle,
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      baseURL: API_BASE_URL,
    }
  );
  return response;
}

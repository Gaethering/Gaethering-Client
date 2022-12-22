import * as T from './boardAPI.type';
import { postRequest } from './requests';

export function postArticle(data: T.PostArticleRequest) {
  const response = postRequest<T.PostArticleResponse, T.PostArticleRequest>(
    T.BoardApiUrl.PostArticle, data
  );
  return response;
}

import * as T from './boardAPI.type';
import { postRequest } from './requests';

export function postArticle(data: FormData) {
  const response = postRequest<T.PostArticleResponse, FormData>(
    T.BoardApiUrl.PostArticle,
    data
  );
  return response;
}

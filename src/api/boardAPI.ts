import axios, { AxiosResponse } from 'axios';
import { API_BASE_URL } from '../data/API_ENV';
import * as T from './boardAPI.type';
import { BoardApiUrl as Api } from './boardAPI.type';

type A<T, D> = AxiosResponse<T, D>;
type PostId = number;

export async function postQnaArticle(data: FormData) {
  type Res = T.PostArticleResponse;
  const response = await axios.post<Res, A<Res, FormData>, FormData>(
    Api.PostArticle + '1',
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      baseURL: API_BASE_URL,
    }
  );
  return response.data;
}
export async function postInfoArticle(data: FormData) {
  type Res = T.PostArticleResponse;
  const response = await axios.post<Res, A<Res, FormData>, FormData>(
    Api.PostArticle + '2',
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      baseURL: API_BASE_URL,
    }
  );
  return response.data;
}

async function getArticles(
  size = 10,
  categoryId: T.CategoryID,
  lastId?: number
) {
  type Res = T.GetArticlesResponse;
  const response = await axios.get<Res, A<Res, void>>(
    `${Api.GetArticles}${categoryId}/list?size=${size}${
      lastId ? '&lastPostId=' + lastId : ''
    }`
  );

  return response.data;
}

export async function getQnaArticles(size?: number, lastId?: PostId) {
  return await getArticles(size, T.CategoryID.qna, lastId);
}

export async function getInfoArticles(size?: number, lastId?: PostId) {
  return await getArticles(size, T.CategoryID.info, lastId);
}

export async function patchArticle(id: PostId, data: T.PatchArticleRequest) {
  type Res = T.PatchArticleResponse;
  type Req = T.PatchArticleRequest;
  const response = await axios.patch<Res, A<Res, Req>, Req>(
    Api.PatchArticle + id,
    data
  );

  return response.data;
}

export async function deleteArticle(id: PostId) {
  const response = await axios.delete<void>(`${Api.DeleteArticle}${id}`);

  return response.data;
}

export async function postImage(id: PostId, data: FormData) {
  type Res = T.PostImageResponse;
  const response = await axios.post<Res, A<Res, FormData>, FormData>(
    `${Api.PostImage}${id}/images`,
    data
  );

  return response.data;
}

export async function deleteImage(id: PostId, imageId: number) {
  const response = await axios.delete<void>(
    `${Api.DeleteImage}${id}/images/${imageId}`
  );

  return response.data;
}

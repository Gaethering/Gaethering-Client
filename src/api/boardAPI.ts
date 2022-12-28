import axios, { AxiosResponse } from 'axios';
import { API_BASE_URL } from '../data/API_ENV';
import * as T from './boardAPI.type';
import { BoardApiUrl as Api } from './boardAPI.type';

type A<T, D> = AxiosResponse<T, D>;
type PostId = number | string;

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

export async function getArticles(
  category: T.CommunityCategory,
  size = 10,
  lastId = Number.MAX_SAFE_INTEGER
) {
  type Res = T.GetArticlesResponse;
  const response = await axios.get<Res, A<Res, void>>(
    `${Api.GetArticles}${T.CategoryID[category]}/list?size=${size}${
      lastId ? '&lastPostId=' + lastId : ''
    }`
  );

  if (response.data.nextCursor === -1) {
    response.data.nextCursor = undefined;
  }

  return response.data;
}

export async function getArticleDetail(categoryId: 1 | 2, postId: PostId) {
  type Res = T.GetArticleDetailResponse;
  const response = await axios.get<Res, A<Res, void>>(
    `${Api.GetArticleDetail}${categoryId}/${postId}`
  );

  return response.data;
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

export async function getComments(
  id: PostId,
  size = 5,
  lastId = Number.MAX_SAFE_INTEGER
) {
  const response = await axios.get<
    T.GetCommentsResponse,
    A<T.GetCommentsResponse, void>
  >(Api.GetComments + id + `/comments?size=${size}&lastCommentId=${lastId}`);

  if (response.data.nextCursor === -1) {
    response.data.nextCursor = undefined;
  }

  return response.data;
}

export async function postComment(id: PostId, content: string) {
  const response = await axios.post<
    T.PostCommentResponse,
    A<T.PostCommentResponse, T.PostCommentRequest>,
    T.PostCommentRequest
  >(Api.PostComment + id + '/comments', { content });

  return response.data;
}

export async function patchComment(
  postId: PostId,
  commentId: number,
  content: string
) {
  const response = await axios.patch<
    T.PatchCommentResponse,
    A<T.PatchCommentResponse, T.PatchCommentRequest>,
    T.PatchCommentRequest
  >(Api.PatchComment + `${postId}/comments/${commentId}`, { content });

  return response.data;
}

export async function deleteComment(postId: PostId, commentId: number) {
  const response = await axios.delete<void>(
    Api.DeleteComment + `${postId}/comments/${commentId}`
  );

  return response;
}

export async function postHeart(postId: PostId) {
  const response = await axios.post<
    T.PostHeartResponse,
    A<T.PostHeartResponse, void>,
    void
  >(Api.PostHeart + `${postId}/comments`);

  return response.data;
}

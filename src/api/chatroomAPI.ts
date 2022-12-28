import axios, { AxiosResponse } from 'axios';
import * as T from './chatroomAPI.type';
import { ChatApiUrl as Api } from './chatroomAPI.type';

type A<T, D> = AxiosResponse<T, D>;

async function postMakeChatroom(data: T.PostChatroomRequest) {
  type Res = T.PostChatroomResponse;
  type Req = T.PostChatroomRequest;
  const response = axios.post<Res, A<Res, Req>, Req>(Api.PostChatroom, data);

  const res = await response;
  return res.data;
}

async function getChatroom(roomKey: string) {
  type Res = T.GetChatroomResponse;
  const response = await axios.get<Res, A<Res, void>>(
    Api.GetChatroom + roomKey
  );

  return response.data;
}

async function getChatHistory(roomKey: string) {
  type Res = T.GetChatroomResponse;
  const response = await axios.get<Res, A<Res, void>>(
    Api.GetChatHistory + roomKey + '/history'
  );

  return response.data;
}

export { getChatHistory, getChatroom, postMakeChatroom };

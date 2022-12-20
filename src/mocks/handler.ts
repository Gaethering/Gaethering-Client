import { rest } from 'msw';
import { AuthApiUrl } from '../api/authAPI.type';
import { SignUpApiUrl } from '../api/signUpAPI.type';
import { SignUpForm } from '../components/SignUp/SignUp.type';

import { mockChatRooms } from './mockChatRooms';
import { mockChatTalk } from './mockChatTalk';

interface LoginBody {
  userID: string;
}
interface LoginResponse {
  username: string;
  age: string;
}

const auth = {};

export const handlers = [
  rest.get('/chatrooms', (req, res, ctx) => {
    console.log(mockChatRooms);
    return new Promise((resolve) =>
      setTimeout(
        () => resolve(res(ctx.status(200), ctx.json(mockChatRooms))),
        1000
      )
    );
  }),
  rest.get('/chatroom/efadc2/info', (req, res, ctx) => {
    console.log(mockChatRooms[0]);
    return new Promise((resolve) =>
      setTimeout(
        () => resolve(res(ctx.status(200), ctx.json(mockChatRooms[0]))),
        500
      )
    );
  }),
  rest.get('/chatroom/efadc2/talks', (req, res, ctx) => {
    console.log(mockChatTalk);
    return new Promise((resolve) =>
      setTimeout(
        () => resolve(res(ctx.status(200), ctx.json(mockChatTalk))),
        1000
      )
    );
  }),
];

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

let auth = {};

export const handlers = [
  rest.post<SignUpForm>(SignUpApiUrl.SIGN_UP, async (req, res, ctx) => {
    const result = await req.json();
    console.log('mocksignup', req);
    return res(ctx.status(200));
  }),

  rest.post<LoginBody, LoginResponse>(
    AuthApiUrl.LogIn,
    async (req, res, ctx) => {
      sessionStorage.setItem('is-auth', 'true');
      const result = await req.json();
      auth = { ...result };
      return res(ctx.status(200));
    }
  ),

  rest.post<LoginBody, LoginResponse>(AuthApiUrl.LogOut, (req, res, ctx) => {
    const isAuth = sessionStorage.getItem('is-auth');

    if (!isAuth) {
      return res(
        ctx.status(403),
        ctx.json({
          message: '로그인 안 돼 있습니다.',
        })
      );
    }

    sessionStorage.setItem('is-auth', '');

    return res(ctx.status(200), ctx.json(auth));
  }),

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

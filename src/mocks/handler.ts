import { rest } from 'msw';
import { AuthApiUrl } from '../api/authAPI.type';
import { mockChatRoom } from './mockChatRooms';

interface LoginBody {
  userID: string;
}
interface LoginResponse {
  username: string;
  age: string;
}

let auth = {};

export const handlers = [
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

  rest.get('chatrooms', (req, res, ctx) => {
    console.log(ctx.json(mockChatRoom));
    return res(ctx.status(200), ctx.json(mockChatRoom));
  }),
];

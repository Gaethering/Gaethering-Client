import { rest } from 'msw';

interface LoginBody {
  userID: string;
}
interface LoginResponse {
  username: string;
  age: string;
}

export const handlers = [
  rest.post<LoginBody, LoginResponse>('/login', (req, res, ctx) => {
    sessionStorage.setItem('is-auth', 'true');

    return res(ctx.status(200));
  }),

  rest.get<LoginBody, LoginResponse>('/user', (req, res, ctx) => {
    const isAuth = sessionStorage.getItem('is-auth');

    if (!isAuth) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: '로그인 안 돼 있습니다.',
        })
      );
    }
    return res(ctx.status(200), ctx.json({ username: 'admin' }));
  }),
];

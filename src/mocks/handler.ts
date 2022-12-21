import { rest } from 'msw';
import { mockChatRooms } from './mockChatRooms';
import { mockChatTalk } from './mockChatTalk';

export const handlers = [
  rest.get('/chatrooms', (req, res, ctx) => {
    return new Promise((resolve) =>
      setTimeout(
        () => resolve(res(ctx.status(200), ctx.json(mockChatRooms))),
        1000
      )
    );
  }),
  rest.get('/chatroom/efadc2/info', (req, res, ctx) => {
    return new Promise((resolve) =>
      setTimeout(
        () => resolve(res(ctx.status(200), ctx.json(mockChatRooms[0]))),
        500
      )
    );
  }),
  rest.get('/chatroom/efadc2/talks', (req, res, ctx) => {
    return new Promise((resolve) =>
      setTimeout(
        () => resolve(res(ctx.status(200), ctx.json(mockChatTalk))),
        1000
      )
    );
  }),
];

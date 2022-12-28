import { hour } from './hour.type';

const enum ChatApiUrl {
  /** POST: 채팅방 만들기 */
  PostChatroom = '/chat/room',
  /** GET: 채팅방 정보 받기 /chat/room/{roomKey} */
  GetChatroom = '/chat/room/',
  /** GET: 채팅 기록 받기 /chat/room/{roomKey}/history */
  GetChatHistory = '/chat/room/',
}

interface ChatRoom {
  name: string;
  maxParticipantCount: string;
  description: string;
}

interface ChatTalkType {
  memberId: string;
  content: string;
  createdAt: string;
}

interface PostChatroomRequest extends ChatRoom {
  walkingTimes: {
    dayOfWeek: string[];
    time: hour[];
  }[];
}

interface PostChatroomResponse extends ChatRoom {
  roomKey: string;
  walkingTimesInfos: {
    dayOfWeek: string[];
    time: hour[];
  }[];
  chatRoomMemberInfos: {
    id: number;
    nickname: string;
    representPetImageUrl: string;
  }[];
}

interface GetChatroomResponse {
  name: string;
  roomKey: string;
  maxParticipantCount: string;
  description: string;
  walkingTimes: {
    dayOfWeek: string[];
    time: hour[];
  }[];
}

export { ChatApiUrl };
export type {
  ChatTalkType,
  PostChatroomRequest,
  PostChatroomResponse,
  GetChatroomResponse,
};

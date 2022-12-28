const enum ChatApiUrl {
  /** POST: 채팅방 만들기 */
  PostChatroom = '/chat/room',
  /** GET: 채팅방 정보 받기 /chat/room/{roomKey} */
  GetChatroom = '/chat/room/',
  /** GET: 채팅방 리스트 받기 /chat/local/list */
  GetChatroomList = '/chat/room/local/list',
  /** GET: 내 채팅방 리스트 받기 /chat/local/list */
  GetChatroomMyList = '/chat/room/list',
  /** GET: 채팅 기록 받기 /chat/room/{roomKey}/history */
  GetChatHistory = '/chat/room/',
}

interface ChatRoom {
  name: string;
  maxParticipantCount: string;
  description: string;
}

interface ChatTalkType {
  memberId: number;
  content: string;
  createdAt: string;
}

interface PostChatroomRequest extends ChatRoom {
  walkingTimes: {
    dayOfWeek: string;
    time: string;
  }[];
}

interface PostChatroomResponse {
  roomKey: string;
}

interface GetChatroomResponse extends ChatRoom {
  roomKey: string;
  walkingTimesInfos: {
    dayOfWeek: string;
    time: string;
  }[];
  chatRoomMemberInfos: {
    id: number;
    nickname: string;
    representPetImageUrl: string;
  }[];
}

interface ListChatRoomInfo extends ChatRoom {
  roomKey: string;
  walkingTimesInfos: {
    dayOfWeek: string;
    time: string;
  }[];
  nowParticipant: 0;
}

interface GetChatroomListResponse {
  numberOfChatRooms: number;
  chatRooms: ListChatRoomInfo[];
}

type GetChatHistoryResponse = ChatTalkType[];

export { ChatApiUrl };
export type {
  ChatTalkType,
  PostChatroomRequest,
  PostChatroomResponse,
  GetChatroomResponse,
  GetChatroomListResponse,
  GetChatHistoryResponse,
  ListChatRoomInfo,
};

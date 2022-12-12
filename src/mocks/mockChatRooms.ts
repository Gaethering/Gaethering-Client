import { ChatRoomInfo } from '../components/Chat/Chat.type';

export const mockChatRoom: ChatRoomInfo[] = [
  {
    roomName: 'ㅁㅁ주공 3단지 평일 저녁 산책 모임 🐾',
    description: 'ㅇㅇ동 ㅁㅁ주공 3단지 평일에 산책하는 모임입니다~',
    lastChat: '저희 공원 도착했어요!',
    lastChatTime: Date.parse('2022-12-11T12:00:00+09:00').toString(),
    maxParticipants: 6,
    participants: 4,
    roomKey: '3a8cb1',
    walkingTime: ['월', '화'],
    unreadMesseges: 12,
  },
  {
    roomName: 'ㅂㅂ공원 주말 오후 산책 모임',
    description: 'ㅇㅇ동 ㅂㅂ공원에서 오후에 산책하는 모임입니다!',
    lastChat: '다들 조심히 들어가세요~',
    lastChatTime: Date.parse('2022-12-12T12:00:00+09:00').toString(),
    maxParticipants: 12,
    participants: 3,
    roomKey: 'efadc2',
    walkingTime: ['월', '목', '토'],
    unreadMesseges: 0,
  },
];

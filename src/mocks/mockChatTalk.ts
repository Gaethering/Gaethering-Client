import { ChatTalkType } from '../components/ChatRoom/ChatRoom.type';

export const mockChatTalk: ChatTalkType[] = [
  {
    petName: '예삐',
    userName: 'user123',
    profileImg: '/public/assets/puppy.png',
    talk: '저는 예삐예요!',
    timestamp: Date.parse('2022-12-20T12:06:00'),
  },
  {
    petName: '뽀삐',
    userName: '뽀삐맘',
    profileImg: '/public/assets/puppy2.png',
    talk: '안녕하세요ㅎㅎ',
    timestamp: Date.parse('2022-12-20T12:12:00'),
  },
  {
    petName: '뽀삐',
    userName: '뽀삐맘',
    profileImg: '/public/assets/puppy2.png',
    talk: '어제 좋은 애견 카페를 발견했어요!',
    timestamp: Date.parse('2022-12-20T12:13:00'),
  },
  {
    petName: '예삐',
    userName: 'user123',
    profileImg: '/public/assets/puppy.png',
    talk: '오 궁금한데요?',
    timestamp: Date.parse('2022-12-20T12:23:00'),
  },
  {
    petName: '초코',
    userName: 'user3333',
    profileImg: '/public/assets/puppy.png',
    talk: '오늘 저녁에 가보는 건 어떠신가요?',
    timestamp: Date.parse('2022-12-20T12:26:00'),
  },
];

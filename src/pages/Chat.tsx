import axios from 'axios';
import { useEffect, useState } from 'react';
import chatStart from '../api/chatAPI';
import ChatNav from '../components/Chat/ChatNav';
import FindChatSection from '../components/Chat/FindChatSection';
import MyChatSection from '../components/Chat/MyChatSection';
import MakeRoomButton from '../components/Community/PostButton';
import { useSetServiceName } from './Root';
import { Container } from './Root.style';

export type ChatState = 'findChat' | 'myChat';

function Chat() {
  const [chatState, setChatState] = useState<ChatState>('findChat');

  const chatService = chatStart(
    axios.defaults.headers.common['Authorization'] as string
  );
  //! TEST
  console.log('chat', chatService);
  ////TEST

  const setNav = useSetServiceName();

  useEffect(() => {
    setNav('개모임');
  }, [setNav]);

  return (
    <div>
      <ChatNav chatState={chatState} setChatState={setChatState} />
      <Container>
        {chatState === 'findChat' ? <FindChatSection /> : <MyChatSection />}
      </Container>
      <MakeRoomButton to={'makeRoom'}>채팅방 만들기</MakeRoomButton>
    </div>
  );
}

export default Chat;

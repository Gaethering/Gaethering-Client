import axios from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import chatStart from '../api/chatAPI';
import { ChatQueryKeys } from '../api/QueryKeys';
import ChatNav from '../components/Chat/ChatNav';
import FindChatSection from '../components/Chat/FindChatSection';
import MyChatSection from '../components/Chat/MyChatSection';
import MakeRoomButton from '../components/Community/PostButton';
import { useSetServiceName } from './Root';

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
      {chatState === 'findChat' ? <FindChatSection /> : <MyChatSection />}
      <MakeRoomButton to={'makeRoom'}>채팅방 만들기</MakeRoomButton>
    </div>
  );
}

export default Chat;

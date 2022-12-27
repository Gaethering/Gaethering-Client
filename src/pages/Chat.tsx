import axios from 'axios';
import { useEffect, useState } from 'react';
import chatStart from '../api/chatAPI';
import ChatNav from '../components/Chat/ChatNav';
import FindChatSection from '../components/Chat/FindChatSection';
import MyChatSection from '../components/Chat/MyChatSection';
import { useSetServiceName } from './Root';

export type ChatState = 'findChat' | 'myChat';

function Chat() {
  const [chatState, setChatState] = useState<ChatState>('findChat');

  useEffect(() => {
    //! Mock API
    // import('../mocks/browser').then((msw) => msw.worker.stop());
    ////
  }, []);
  useEffect(() => {
    const chat = chatStart(
      axios.defaults.headers.common['Authorization'] as string
    );
    console.log('chat', chat);

    chat.activate();
  }, []);

  const setNav = useSetServiceName();

  useEffect(() => {
    setNav('개모임');
  }, [setNav]);

  return (
    <div>
      <ChatNav chatState={chatState} setChatState={setChatState} />
      {/* {chatState === 'findChat' ? <FindChatSection /> : <MyChatSection />} */}
    </div>
  );
}

export default Chat;

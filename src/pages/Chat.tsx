import { useState } from 'react';
import ChatNav from '../components/Chat/ChatNav';
import FindChatSection from '../components/Chat/FindChatSection';
import MyChatSection from '../components/Chat/MyChatSection';

export type ChatState = 'findChat' | 'myChat';

function Chat() {
  const [chatState, setChatState] = useState<ChatState>('myChat');
  return (
    <div>
      <ChatNav chatState={chatState} setChatState={setChatState} />
      {chatState === 'findChat' ? <FindChatSection /> : <MyChatSection />}
    </div>
  );
}

export default Chat;

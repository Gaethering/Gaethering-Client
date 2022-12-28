import axios from 'axios';
import { useEffect, useState } from 'react';
import chatStart from '../api/chatAPI';
import { postRequest } from '../api/requests';
import ChatNav from '../components/Chat/ChatNav';
import FindChatSection from '../components/Chat/FindChatSection';
import MyChatSection from '../components/Chat/MyChatSection';
import Button from '../components/Form/Button';
import { useSetServiceName } from './Root';

export type ChatState = 'findChat' | 'myChat';

function Chat() {
  const [chatState, setChatState] = useState<ChatState>('findChat');

  const chat = chatStart(
    axios.defaults.headers.common['Authorization'] as string
  );
  console.log('chat', chat);
  useEffect(() => {
    chat.activate();
  }, []);

  const onClick = () => {
    chat.publish({
      destination: '/app/chat.enter.b313627e-f9ae-4203-b41a-a161bb0af872',
      body: JSON.stringify({ memberId: '1', content: '입장' }),
    });
    chat.publish({
      destination: '/app/chat.send.b313627e-f9ae-4203-b41a-a161bb0af872',
      body: JSON.stringify({ memberId: '1', content: 'Hello!!!' }),
    });
  };

  const onClick2 = async () => {
    const res = await postRequest('/chat/room', {
      name: null,
      maxParticipantCount: 0,
      description: '설명',
      walkingTimes: [
        {
          dayOfWeek: '월',
          time: '2020-11-20 11:30 ~ 2020-11-20 13:30',
        },
        {
          dayOfWeek: '화',
          time: '2020-11-20 11:30 ~ 2020-11-20 13:30',
        },
      ],
    });

    console.log('chatRes', res);
  };

  const setNav = useSetServiceName();

  useEffect(() => {
    setNav('개모임');
  }, [setNav]);

  return (
    <div>
      <Button onClick={onClick}>Hello</Button>
      <Button onClick={onClick2}>Make</Button>
      <ChatNav chatState={chatState} setChatState={setChatState} />
      {/* {chatState === 'findChat' ? <FindChatSection /> : <MyChatSection />} */}
    </div>
  );
}

export default Chat;

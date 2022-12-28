import axios from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import chatStart from '../api/chatAPI';
import { ChatQueryKeys } from '../api/QueryKeys';
import ChatNav from '../components/Chat/ChatNav';
import FindChatSection from '../components/Chat/FindChatSection';
import MyChatSection from '../components/Chat/MyChatSection';
import Button from '../components/Form/Button';
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

  useEffect(() => {
    chatService.activate();
  }, [chatService]);

  const onClick = () => {
    chatService.publish({
      destination: '/app/chat.enter.725cae56-5936-4d01-a186-d7533d51acf6',
      body: JSON.stringify({ memberId: '2', content: '입장' }),
    });
    chatService.publish({
      destination: '/app/chat.send.725cae56-5936-4d01-a186-d7533d51acf6',
      body: JSON.stringify({ memberId: '2', content: 'Hello!!!' }),
    });
  };

  const onClick2 = async () => {
    const res = await axios.get(
      '/chat/room/725cae56-5936-4d01-a186-d7533d51acf6'
    );

    console.log('REQ', res.request);
    console.log('chatRes', res.config);
    console.log('chatRes', res.data);
  };
  const onClick3 = async () => {
    const res = await axios.post('/chat/room', {
      name: 'name',
      maxParticipantCount: 10,
      description: '설명',
      walkingTimes: [
        {
          dayOfWeek: '월',
          time: '1, 2, 3, 4',
        },
        {
          dayOfWeek: '화',
          time: '2020-11-20 11:30 ~ 2020-11-20 13:30',
        },
      ],
    });

    console.log('REQ', res.request);
    console.log('chatRes', res.config);
    console.log('chatRes', res.data);
  };

  const setNav = useSetServiceName();

  useEffect(() => {
    setNav('개모임');
  }, [setNav]);

  return (
    <div>
      <Button onClick={onClick}>Hello</Button>
      <Button onClick={onClick2}>Get</Button>
      <Button onClick={onClick3}>Make</Button>
      <ChatNav chatState={chatState} setChatState={setChatState} />
      {chatState === 'findChat' ? <FindChatSection /> : <MyChatSection />}
    </div>
  );
}

export default Chat;

import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ChatInput from './ChatInput';
import ChatRoomMyTalk from './ChatRoomMyTalk';
import ChatRoomTalk from './ChatRoomTalk';
import ChatRoomTitle from './ChatRoomTitle';
import { useQuery } from 'react-query';
import { ChatRoomInfo } from '../Chat/Chat.type';
import { getRequest } from '../../api/requests';
import Spinner from '../widgets/Spinner';
import { ChatTalkType } from './ChatRoom.type';
import { StyledChatRoom } from './ChatRoom.style';

function ChatRoom() {
  const { roomKey } = useParams<'roomKey'>();

  //! Mock API
  const getChatroom = () =>
    getRequest<ChatRoomInfo>(`http://localhost:5173/chatroom/${roomKey}/info`);

  const getTalks = () =>
    getRequest<ChatTalkType[]>(
      `http://localhost:5173/chatroom/${roomKey}/talks`
    );

  const myName = 'user3333';
  ////

  const { data } = useQuery(['chatroom', roomKey], getChatroom);
  const talksQuery = useQuery(['chatroomTalk', roomKey], getTalks);
  const chatRoom = data?.data;
  const talks = talksQuery.data?.data;

  document.title = '채팅';

  return (
    <StyledChatRoom>
      {chatRoom && <ChatRoomTitle {...chatRoom} />}

      {talksQuery.isLoading ? (
        <Spinner />
      ) : (
        <>
          {talks?.map((talk) =>
            talk.userName === myName ? (
              <ChatRoomMyTalk key={talk.timestamp} {...talk} />
            ) : (
              <ChatRoomTalk key={talk.timestamp} {...talk} />
            )
          )}
          <ChatInput />
        </>
      )}
    </StyledChatRoom>
  );
}

export default ChatRoom;

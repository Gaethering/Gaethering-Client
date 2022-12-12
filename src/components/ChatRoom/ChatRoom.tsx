import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ChatInput from './ChatInput';
import ChatRoomMyTalk from './ChatRoomMyTalk';
import ChatRoomTalk from './ChatRoomTalk';
import ChatRoomTitle from './ChatRoomTitle';

function ChatRoom() {
  const { roomKey } = useParams<'roomKey'>();
  
  return (
    <StyledChatRoom>
      <div>Room {roomKey}</div>
      <ChatRoomTitle />
      <ChatRoomTalk />
      <ChatRoomMyTalk />
      <ChatInput />
    </StyledChatRoom>
  );
}

export default ChatRoom;

const StyledChatRoom = styled.div`
  background-color: ${({ theme: { color } }) => color.white};
`;

import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function ChatRoom() {
  const { roomKey } = useParams<'roomKey'>();
  
  return (
    <StyledChatRoom>
      <div>Room {roomKey}</div>
    </StyledChatRoom>
  );
}

export default ChatRoom;

const StyledChatRoom = styled.div`
  background-color: ${({ theme: { color } }) => color.white};
`;

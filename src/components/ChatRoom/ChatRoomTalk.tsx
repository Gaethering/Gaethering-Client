import styled from 'styled-components';
import getTime from '../../util/getTime';
import { ChatTalkType } from './ChatRoom.type';
import SpeechBubble from './SpeechBubble';

function ChatRoomTalk({
  profileImg,
  petName,
  userName,
  talk,
  timestamp,
}: ChatTalkType) {
  return (
    <StyledTalk>
      <img src={profileImg} alt={petName} />
      <ChatBox>
        <NameArea>
          <span className="chat-pet-name">{petName}</span>
          <span className="chat-user-name">{userName}</span>
        </NameArea>
        <TalkArea>
          <SpeechBubble color="white">{talk}</SpeechBubble>
          <span className="chat-timestamp">{getTime(timestamp)}</span>
        </TalkArea>
      </ChatBox>
    </StyledTalk>
  );
}

export default ChatRoomTalk;

const StyledTalk = styled.div`
  display: flex;
  align-items: center;

  height: 7rem;
  margin: 1.4rem 2rem;

  img {
    width: 6rem;
    height: 6rem;

    margin-right: 1rem;

    border-radius: 100%;
  }
`;

const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameArea = styled.div`
  margin-left: 1.2rem;
  .chat-pet-name {
    margin-right: 0.4rem;

    font-size: 1.4rem;
    font-weight: 600;
  }

  .chat-user-name {
    font-size: 1rem;
  }
`;

const TalkArea = styled.div`
  display: flex;
  align-items: end;

  .chat-timestamp {
    height: 2rem;

    margin-left: 0.6rem;
    
    font-size: 1rem;
    font-weight: 400;
  }
`;

import styled from 'styled-components';
import getTime from '../../util/getTime';
import { ChatTalkType } from './ChatRoom.type';
import { ChatBox, NameArea, StyledTalk, TalkArea } from './ChatRoomTalk.style';
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

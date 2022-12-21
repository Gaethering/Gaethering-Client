import getTime from '../../util/getTime';
import { ChatTalkType } from './ChatRoom.type';
import { MyTalk } from './ChatRoomMyTalk.style';
import { ChatBox, TalkArea } from './ChatRoomTalk.style';
import SpeechBubble from './SpeechBubble';

function ChatRoomMyTalk({ talk, timestamp }: ChatTalkType) {
  return (
    <MyTalk>
      <ChatBox>
        <TalkArea>
          <span className="chat-timestamp">{getTime(timestamp)}</span>
          <SpeechBubble color="myBubble">{talk}</SpeechBubble>
        </TalkArea>
      </ChatBox>
    </MyTalk>
  );
}

export default ChatRoomMyTalk;

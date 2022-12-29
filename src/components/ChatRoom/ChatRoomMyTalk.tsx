import { ChatTalkType } from '../../api/chatroomAPI.type';
import getChatTime from '../../util/getChatTime';
import { MyTalk } from './ChatRoomMyTalk.style';
import { ChatBox, TalkArea } from './ChatRoomTalk.style';
import SpeechBubble from './SpeechBubble';

function ChatRoomMyTalk({ content, createdAt }: ChatTalkType) {
  return (
    <MyTalk>
      <ChatBox>
        <TalkArea>
          <span className="chat-timestamp">{getChatTime(createdAt)}</span>
          <SpeechBubble color="myBubble">{content}</SpeechBubble>
        </TalkArea>
      </ChatBox>
    </MyTalk>
  );
}

export default ChatRoomMyTalk;

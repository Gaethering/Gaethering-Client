import { ChatTalkType, GetChatroomResponse } from '../../api/chatroomAPI.type';
import getTime from '../../util/getChatTime';
import { ChatBox, NameArea, StyledTalk, TalkArea } from './ChatRoomTalk.style';
import SpeechBubble from './SpeechBubble';
import defaultProfilePicture from '../../assets/defaultProfilePicture.svg';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getMemberProfile } from '../../api/chatroomAPI';

function ChatRoomTalk({
  content,
  createdAt,
  memberId,
  chatRoomMemberInfos,
}: ChatTalkType & GetChatroomResponse) {
  const { data } = useQuery(['member', 'profile', memberId], () =>
    getMemberProfile(memberId)
  );

  return (
    <StyledTalk>
      <img
        src={data?.pets[0].imageUrl ?? defaultProfilePicture}
        alt={data?.nickname}
      />
      <ChatBox>
        <NameArea>
          <span className="chat-pet-name">{data?.nickname}</span>
          {/* <span className="chat-user-name">{userName}</span> */}
        </NameArea>
        <TalkArea>
          <SpeechBubble color="white">{content}</SpeechBubble>
          <span className="chat-timestamp">{getTime(createdAt)}</span>
        </TalkArea>
      </ChatBox>
    </StyledTalk>
  );
}

export default ChatRoomTalk;

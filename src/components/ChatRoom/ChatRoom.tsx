import { useParams } from 'react-router-dom';
import ChatInput from './ChatInput';
import ChatRoomMyTalk from './ChatRoomMyTalk';
import ChatRoomTalk from './ChatRoomTalk';
import ChatRoomTitle from './ChatRoomTitle';
import { useQuery, useQueryClient } from 'react-query';
import Spinner from '../widgets/Spinner';
import { Blank, StyledChatRoom } from './ChatRoom.style';
import { ChatQueryKeys, QueryKeys } from '../../api/QueryKeys';
import { getChatHistory, getChatroom } from '../../api/chatroomAPI';
import { NavInfoResponse } from '../../api/authAPI.type';

function ChatRoom() {
  const queryClient = useQueryClient();
  const userId = queryClient.getQueryData<NavInfoResponse>(
    QueryKeys.navInfo
  )?.memberId;
  const { roomKey } = useParams<'roomKey'>();

  const { data: history, isLoading: historyLoading } = useQuery(
    [...ChatQueryKeys.chatHistory, roomKey],
    () => getChatHistory(roomKey ?? '')
  );
  const { data: info } = useQuery(
    [...ChatQueryKeys.chatRoomInfo, roomKey],
    () => getChatroom(roomKey ?? '')
  );

  document.title = info?.name ?? '채팅방';

  return (
    <StyledChatRoom>
      {info && <ChatRoomTitle {...info} />}
      <Blank />

      {historyLoading || !info ? (
        <Spinner />
      ) : (
        <>
          {history?.map((talk) =>
            talk.memberId === (userId ?? 0) ? (
              <ChatRoomMyTalk key={talk.createdAt} {...talk} />
            ) : (
              <ChatRoomTalk key={talk.createdAt} {...info} {...talk} />
            )
          )}
          <ChatInput />
          <Blank />
        </>
      )}
    </StyledChatRoom>
  );
}

export default ChatRoom;

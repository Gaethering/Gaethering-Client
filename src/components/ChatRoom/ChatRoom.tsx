import { useParams } from 'react-router-dom';
import ChatInput from './ChatInput';
import ChatRoomMyTalk from './ChatRoomMyTalk';
import ChatRoomTalk from './ChatRoomTalk';
import ChatRoomTitle from './ChatRoomTitle';
import { useQuery, useQueryClient } from 'react-query';
import Spinner from '../widgets/Spinner';
import { Blank, Chats, StyledChatRoom } from './ChatRoom.style';
import { ChatQueryKeys, QueryKeys } from '../../api/QueryKeys';
import { getChatHistory, getChatroom } from '../../api/chatroomAPI';
import { NavInfoResponse } from '../../api/authAPI.type';
import { useEffect } from 'react';
import chatStart from '../../api/chatAPI';
import { getAccessToken } from '../../api/axiosUtils';
import {
  ChatTalkType,
  GetChatHistoryResponse,
} from '../../api/chatroomAPI.type';

function ChatRoom() {
  const { roomKey } = useParams<'roomKey'>();
  const chatService = chatStart('Bearer' + getAccessToken());

  const queryClient = useQueryClient();
  const userId = queryClient.getQueryData<NavInfoResponse>(
    QueryKeys.navInfo
  )?.memberId;

  const { data: history, isLoading: historyLoading } = useQuery(
    [...ChatQueryKeys.chatHistory, roomKey],
    () => getChatHistory(roomKey ?? '')
  );
  const { data: info } = useQuery(
    [...ChatQueryKeys.chatRoomInfo, roomKey],
    () => getChatroom(roomKey ?? '')
  );

  if (!chatService.connected) {
    chatService.activate();
  }
  console.log('chat', chatService, chatService.connected);

  chatService.onConnect = (frame) => {
    // Do something, all subscribes must be done is this callback
    // This is needed because this will be executed after a (re)connect
    console.warn('STOMP CONNECTED', frame);

    chatService?.subscribe(
      `/exchange/chat.exchange/room.${roomKey}`,
      (data) => {
        console.log('STOMP SUBSCRIBE');
        console.log('BODY', data.body);
        queryClient.invalidateQueries([...ChatQueryKeys.chatHistory, roomKey]);
      }
    );
  };

  document.title = info?.name ?? '채팅방';

  return (
    <StyledChatRoom>
      {info && <ChatRoomTitle {...info} />}
      <Blank />

      {historyLoading || !info ? (
        <Spinner />
      ) : (
        <>
          <Chats>
            {history?.map((talk) => {
              if (talk.content === '입장') {
                return;
              }
              return talk.memberId === (userId ?? 0) ? (
                <ChatRoomMyTalk key={talk.createdAt} {...talk} />
              ) : (
                <ChatRoomTalk key={talk.createdAt} {...info} {...talk} />
              );
            })}
          </Chats>
          <ChatInput
            chatService={chatService}
            roomKey={roomKey}
            userId={userId}
          />
          <Blank />
        </>
      )}
    </StyledChatRoom>
  );
}

export default ChatRoom;

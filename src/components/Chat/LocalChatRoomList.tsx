import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getRequest } from '../../api/requests';
import { mockChatRoom } from '../../mocks/mockChatRooms';
import { ChatRoomInfo } from './Chat.type';
import LocalChatRoom from './LocalChatRoom';
import LocalChatRoomSkeleton from './LocalChatRoomSkeleton';

function LocalChatRoomList() {
  const getChatrooms = () => getRequest<ChatRoomInfo[]>('chatrooms');
  const { data: chatRooms, isLoading } = useQuery('chatrooms', getChatrooms);

  return (
    <>
      {isLoading ? (
        <>
          <LocalChatRoomSkeleton />
          <LocalChatRoomSkeleton />
          <LocalChatRoomSkeleton />
        </>
      ) : (
        <div>
          {chatRooms?.data?.map((room) => (
            <LocalChatRoom {...room} key={room.roomKey} />
          ))}
        </div>
      )}
    </>
  );
}

export default LocalChatRoomList;

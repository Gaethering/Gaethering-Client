import { useState } from 'react';
import { useQuery } from 'react-query';
import { getRequest } from '../../api/requests';
import { mockChatRoom } from '../../mocks/mockChatRooms';
import { ChatRoomInfo } from './Chat.type';
import LocalChatRoom from './LocalChatRoom';

function LocalChatRoomList() {
  const { data: query } = useQuery('chatrooms', () =>
    getRequest<ChatRoomInfo[]>('chatrooms')
  );
  const chatRooms = query?.data;

  return (
    <div>
      {chatRooms?.map((room) => (
        <LocalChatRoom {...room} key={room.roomKey} />
      ))}
    </div>
  );
}

export default LocalChatRoomList;

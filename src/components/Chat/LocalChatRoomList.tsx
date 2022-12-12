import { useState } from 'react';
import { mockChatRoom } from '../../mocks/mockChatRooms';
import { ChatRoomInfo } from './Chat.type';
import LocalChatRoom from './LocalChatRoom';

function LocalChatRoomList() {
  const [chatRooms, setChatRooms] = useState<ChatRoomInfo[]>(mockChatRoom);

  return (
    <div>
      {chatRooms.map((room) => (
        <LocalChatRoom {...room} key={room.roomKey} />
      ))}
    </div>
  );
}

export default LocalChatRoomList;

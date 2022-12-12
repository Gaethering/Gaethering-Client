import { useState } from 'react';
import { mockChatRoom } from '../../mocks/mockChatRooms';
import LocalChatRoom from './LocalChatRoom';

export interface ChatRoomInfo {
  roomName: string;
  roomKey: string;
  description: string;
  participants: number;
  maxParticipants: number;
  lastChat: string;
  walkingTime: string[];
}

type Props = {};

function LocalChatRoomList({}: Props) {
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

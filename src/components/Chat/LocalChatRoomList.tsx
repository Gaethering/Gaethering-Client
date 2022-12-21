import { useQuery } from 'react-query';
import { getRequest } from '../../api/requests';
import { ChatRoomInfo } from './Chat.type';
import LocalChatRoom from './LocalChatRoom';
import LocalChatRoomSkeleton from './LocalChatRoomSkeleton';

function LocalChatRoomList() {
  //! Mock API
  const getChatrooms = () =>
    getRequest<ChatRoomInfo[]>('http://localhost:5173/chatrooms');
  ////

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
          {chatRooms?.map((room) => (
            <LocalChatRoom {...room} key={room.roomKey} />
          ))}
        </div>
      )}
    </>
  );
}

export default LocalChatRoomList;

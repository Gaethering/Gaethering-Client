import { useQuery } from 'react-query';
import { getChatroomList } from '../../api/chatroomAPI';
import { ChatQueryKeys } from '../../api/QueryKeys';
import LocalChatRoom from './LocalChatRoom';
import LocalChatRoomSkeleton from './LocalChatRoomSkeleton';

function LocalChatRoomList() {
  const { data: chatRooms, isLoading } = useQuery(
    ChatQueryKeys.chatRoomList,
    getChatroomList
  );

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
          {chatRooms?.chatRooms.map((room) => (
            <LocalChatRoom {...room} key={room.roomKey} />
          ))}
        </div>
      )}
    </>
  );
}

export default LocalChatRoomList;

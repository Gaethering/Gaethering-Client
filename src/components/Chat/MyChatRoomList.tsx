import { useQuery } from 'react-query';
import { getChatroomMyList } from '../../api/chatroomAPI';
import { ChatQueryKeys } from '../../api/QueryKeys';
import MyChatRoom from './MyChatRoom';
import MyChatRoomSkeleton from './MyChatRoomSkeleton';

// type Props = {}

function MyChatRoomList() {
  const { data, isLoading } = useQuery(
    ChatQueryKeys.chatRoomMyList,
    getChatroomMyList
  );

  return (
    <>
      {isLoading ? (
        <>
          <MyChatRoomSkeleton />
          <MyChatRoomSkeleton />
          <MyChatRoomSkeleton />
        </>
      ) : (
        <>
          <div>
            {data?.chatRooms.map((elem) => (
              <MyChatRoom {...elem} key={elem.roomKey} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default MyChatRoomList;

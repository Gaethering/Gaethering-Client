import { useQuery } from 'react-query';
import { getRequest } from '../../api/requests';
import { ChatRoomInfo } from './Chat.type';
import MyChatRoom from './MyChatRoom';
import MyChatRoomSkeleton from './MyChatRoomSkeleton';

// type Props = {}

function MyChatRoomList() {
  //! Mock API
  const { data: query, isLoading } = useQuery('chatrooms', () =>
    getRequest<ChatRoomInfo[]>('http://localhost:5173/chatrooms')
  );
  ////

  const chatRooms = query?.data;

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
            {chatRooms
              ?.sort(
                (x, y) => parseInt(y.lastChatTime) - parseInt(x.lastChatTime)
              )
              .map((elem) => (
                <MyChatRoom {...elem} key={elem.roomKey} />
              ))}
          </div>
        </>
      )}
    </>
  );
}

export default MyChatRoomList;

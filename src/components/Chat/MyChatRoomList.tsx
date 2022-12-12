import { useQuery } from 'react-query';
import { getRequest } from '../../api/requests';
import { ChatRoomInfo } from './Chat.type';
import MyChatRoom from './MyChatRoom';

// type Props = {}

function MyChatRoomList() {
  const { data: query } = useQuery('chatrooms', () =>
    getRequest<ChatRoomInfo[]>('chatrooms')
  );
  const chatRooms = query?.data;

  return (
    <div>
      {chatRooms
        ?.sort((x, y) => parseInt(y.lastChatTime) - parseInt(x.lastChatTime))
        .map((elem) => (
          <MyChatRoom {...elem} key={elem.roomKey} />
        ))}
    </div>
  );
}

export default MyChatRoomList;

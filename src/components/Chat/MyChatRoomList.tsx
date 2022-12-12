import { mockChatRoom } from '../../mocks/mockChatRooms';
import MyChatRoom from './MyChatRoom';

// type Props = {}

function MyChatRoomList() {
  return (
    <div>
      {mockChatRoom
        .sort((x, y) => parseInt(y.lastChatTime) - parseInt(x.lastChatTime))
        .map((elem) => (
          <MyChatRoom {...elem} key={elem.roomKey} />
        ))}
    </div>
  );
}

export default MyChatRoomList;

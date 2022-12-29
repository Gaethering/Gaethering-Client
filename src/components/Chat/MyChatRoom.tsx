import { Link } from 'react-router-dom';
import {
  GetChatroomListResponse,
  ListChatRoomInfo,
} from '../../api/chatroomAPI.type';
import useRelativeTime from '../../Hooks/useRelativeTime';
import { Left, Right, StyledMyChatRoom, Unread } from './MyChatRoom.style';

function MyChatRoom({
  description,
  name,
  walkingTimesInfos,
  roomKey,
  nowParticipant,
}: ListChatRoomInfo) {
  return (
    <StyledMyChatRoom>
      <Link to={roomKey}>
        <Left>
          <h2>
            {name} <span>{nowParticipant}</span>
          </h2>
          {/* <p className="last-chat">{lastChat}</p> */}
          <p className="last-chat">{description}</p>
        </Left>
        <Right>
          {/* <p>{useRelativeTime(lastChatTime)}</p> */}
          {/* {unreadMesseges ? <Unread>{unreadMesseges}</Unread> : null} */}
        </Right>
      </Link>
    </StyledMyChatRoom>
  );
}

export default MyChatRoom;

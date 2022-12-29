import { Link } from 'react-router-dom';
import { ListChatRoomInfo } from '../../api/chatroomAPI.type';
import Button from '../Form/Button.style';
import { Bottom, Info, StyledLocalChatRoom } from './LocalChatRoom.style';

function LocalChatRoom({
  description,
  maxParticipant,
  name,
  nowParticipant,
  roomKey,
  walkingTimeInfos,
}: ListChatRoomInfo) {
  console.log(walkingTimeInfos);
  return (
    <StyledLocalChatRoom>
      <h2 className="chatroom-title">{name}</h2>
      <p className="chatroom-description">{description}</p>

      <Info>
        <div className="chatroom-participants">
          참여: {nowParticipant} / {maxParticipant}
        </div>
        {/* <span>{useRelativeTime(lastChatTime)}</span> */}
      </Info>

      <Bottom>
        <p className="chatroom-walking-time">
          {walkingTimeInfos?.map((elem) => (
            <span key={elem.dayOfWeek}>
              {elem.dayOfWeek}요일: {elem.time}
            </span>
          ))}
        </p>
        <Link to={roomKey}>
          <Button btnTheme="main">참여</Button>
        </Link>
      </Bottom>
    </StyledLocalChatRoom>
  );
}

export default LocalChatRoom;

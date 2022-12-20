import useRelativeTime from '../../Hooks/useRelativeTime';
import Button from '../Form/Button.style';
import { ChatRoomInfo } from './Chat.type';
import { Bottom, Info, StyledLocalChatRoom } from './LocalChatRoom.style';

function LocalChatRoom({
  roomName,
  description,
  lastChatTime,
  participants,
  maxParticipants,
  walkingTime,
}: ChatRoomInfo) {
  return (
    <StyledLocalChatRoom>
      <h2 className="chatroom-title">{roomName}</h2>
      <p className="chatroom-description">{description}</p>

      <Info>
        <div className="chatroom-participants">
          참여: {participants} / {maxParticipants}
        </div>
        <span>{useRelativeTime(lastChatTime)}</span>
      </Info>

      <Bottom>
        <p className="chatroom-walking-time">
          {walkingTime.map((elem) => (
            <span key={elem}>{elem}</span>
          ))}
        </p>
        <Button btnTheme="main">참여</Button>
      </Bottom>
    </StyledLocalChatRoom>
  );
}

export default LocalChatRoom;

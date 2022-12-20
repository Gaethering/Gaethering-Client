import { Link } from 'react-router-dom';
import { ChatRoomInfo } from '../Chat/Chat.type';
import infoMark from '../../assets/infoMark.svg';
import { InfoMark, Title } from './ChatRoomTitle.style';

function ChatRoomTitle({
  roomName,
  participants,
  maxParticipants,
}: ChatRoomInfo) {
  const handleInfoClick = () => {
    alert('info');
  };

  return (
    <Title>
      <Link to="./../" className="chatroom-back">
        {'<'}
      </Link>
      <h2>
        {roomName}
        <div>{`${participants} / ${maxParticipants}`}</div>
      </h2>
      <InfoMark type="button" onClick={handleInfoClick}>
        <img src={infoMark} alt="채팅방 정보" />
      </InfoMark>
    </Title>
  );
}

export default ChatRoomTitle;

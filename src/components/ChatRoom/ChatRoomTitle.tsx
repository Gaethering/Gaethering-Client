import { Link } from 'react-router-dom';
import infoMark from '../../assets/infoMark.svg';
import { InfoMark, Title } from './ChatRoomTitle.style';
import { GetChatroomResponse } from '../../api/chatroomAPI.type';

type ChatRoomInfo = GetChatroomResponse;

function ChatRoomTitle({
  description,
  maxParticipant,
  name,
  chatRoomMemberInfos,
  walkingTimesInfos,
}: ChatRoomInfo) {
  const handleInfoClick = () => {
    alert('채팅방 설명: ' + description);
  };

  return (
    <Title>
      <Link to="./../" className="chatroom-back">
        {'<'}
      </Link>
      <h2>
        {name}
        <div>{`${maxParticipant}`}</div>
      </h2>
      <InfoMark type="button" onClick={handleInfoClick}>
        <img src={infoMark} alt="채팅방 정보" />
      </InfoMark>
    </Title>
  );
}

export default ChatRoomTitle;

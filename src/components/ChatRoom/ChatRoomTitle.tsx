import { useNavigate } from 'react-router-dom';
import infoMark from '../../assets/infoMark.svg';
import { InfoMark, Title } from './ChatRoomTitle.style';
import { GetChatroomResponse } from '../../api/chatroomAPI.type';
import { Client } from '@stomp/stompjs';

interface ChatRoomInfo extends GetChatroomResponse {
  client: Client;
}

function ChatRoomTitle({
  description,
  maxParticipant,
  name,
  client,
  walkingTimeInfos,
}: ChatRoomInfo) {
  const handleInfoClick = () => {
    alert(
      '채팅방 설명: ' +
        description +
        '\n' +
        '산책 시간: \n' +
        (walkingTimeInfos.map(
          (elem) => `${elem.dayOfWeek}요일: ${elem.time}\n`
        ) ?? '산책 안 함')
    );
  };
  const navigate = useNavigate();
  const handleBack = async () => {
    if (!confirm('채팅방을 나가시겠습니까?')) {
      return;
    }
    await client.deactivate();
    navigate('./../');
  };

  return (
    <Title>
      <button onClick={handleBack} className="chatroom-back">
        {'<'}
      </button>
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

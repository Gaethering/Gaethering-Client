import React from 'react';
import styled from 'styled-components';
import useRelativeTime from '../../Hooks/useRelativeTime';
import Button from '../Form/Button.style';
import { ChatRoomInfo } from './LocalChatRoomList';

function LocalChatRoom({
  roomName,
  roomKey,
  description,
  lastChat,
  participants,
  maxParticipants,
  walkingTime,
}: ChatRoomInfo) {
  return (
    <StyledLocalChatRoom>
      <h2 className="chatroom-title">{roomName}</h2>
      <p className="chatroom-description">{description}</p>
      <div className="chatroom-participants">
        참여: {participants} / {maxParticipants}
      </div>
      <div className="chatroom-last-chat">{useRelativeTime(lastChat)}</div>
      <p className="chatroom-walkingTime">
        {walkingTime.map((elem) => (
          <div key={elem}>{elem}</div>
        ))}
      </p>
      <Button btnTheme="main">참여</Button>
    </StyledLocalChatRoom>
  );
}

export default LocalChatRoom;

const StyledLocalChatRoom = styled.div`
  margin: 3rem;
  padding: 2rem;

  background-color: ${({ theme: { color } }) => color.white};
  border-radius: 1.6rem;
  box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.1);
`;

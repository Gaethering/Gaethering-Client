import React from 'react';
import styled from 'styled-components';
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
      <div className="chatroom-description">{description}</div>
      <div className="chatroom-participants">
        {participants} / {maxParticipants}
      </div>
      <div className="chatroom-last-chat">{lastChat.toISOString()}</div>
      <div className="chatroom-walkingTime">
        {walkingTime.map((elem) => (
          <div>{elem}</div>
        ))}
      </div>
      <button type="button">참여</button>
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

import React from 'react';
import styled from 'styled-components';
import useRelativeTime from '../../Hooks/useRelativeTime';
import Button from '../Form/Button.style';
import { ChatRoomInfo } from './Chat.type';

function LocalChatRoom({
  roomName,
  roomKey,
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

const StyledLocalChatRoom = styled.div`
  margin: 3rem;
  padding: 2rem;

  background-color: ${({ theme: { color } }) => color.white};
  border-radius: 1.6rem;
  box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.1);

  p.chatroom-walking-time {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 4rem;

  margin: 2rem 0;

  div {
    padding: 0.2rem 1.4rem;

    border: 0.15rem solid ${({ theme: { color } }) => color.main};
    border-radius: 1rem;

    color: ${({ theme: { color } }) => color.main};
    font-weight: 700;
  }

  span {
    display: flex;
    align-items: center;

    height: 1.6rem;
    box-sizing: border-box;

    padding-left: 2rem;
    border-left: 0.1rem solid ${({ theme: { color } }) => color.gray3};

    color: ${({ theme: { color } }) => color.gray1};
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

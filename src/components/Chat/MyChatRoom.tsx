import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useRelativeTime from '../../Hooks/useRelativeTime';
import { ChatRoomInfo } from './Chat.type';

function MyChatRoom({
  roomName,
  roomKey,
  lastChat,
  lastChatTime,
  participants,
  unreadMesseges,
}: ChatRoomInfo) {
  return (
    <StyledMyChatRoom>
      <Link to={roomKey}>
        <Left>
          <h2>
            {roomName} <span>{participants}</span>
          </h2>
          <p>{lastChat}</p>
        </Left>
        <Right>
          <p>{useRelativeTime(lastChatTime)}</p>
          {unreadMesseges ? <Unread>{unreadMesseges}</Unread> : null}
        </Right>
      </Link>
    </StyledMyChatRoom>
  );
}

export default MyChatRoom;

const StyledMyChatRoom = styled.div`
  a {
    display: flex;
    justify-content: space-between;

    margin: 3rem 0;
    padding: 2rem 3rem;

    height: 6rem;

    background-color: ${({ theme: { color } }) => color.white};
    border-radius: 1.6rem;
    box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.1);

    text-decoration: none;
    font-style: normal;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  h2 {
    display: flex;
    align-items: center;
    font-size: 2.4rem;
    span {
      margin-left: 1rem;

      color: ${({ theme: { color } }) => color.main};
      font-size: 2rem;
      font-weight: 600;
    }
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const Unread = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.6rem;
  height: 2.6rem;

  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme: { color } }) => color.white};

  border-radius: 100%;
  background-color: ${({ theme: { color } }) => color.redPoint};
`;

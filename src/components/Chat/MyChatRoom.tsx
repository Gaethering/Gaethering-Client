import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useRelativeTime from '../../Hooks/useRelativeTime';
import { ChatRoomInfo } from './Chat.type';
import { Left, Right, StyledMyChatRoom, Unread } from './MyChatRoom.style';

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
          <p className="last-chat">{lastChat}</p>
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

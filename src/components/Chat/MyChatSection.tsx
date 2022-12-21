import React from 'react';
import ChatSearchBar from './ChatSearchBar';
import MyChatRoomList from './MyChatRoomList';

// type Props = {};

function MyChatSection() {
  return (
    <section>
      <ChatSearchBar />
      <MyChatRoomList />
    </section>
  );
}

export default MyChatSection;

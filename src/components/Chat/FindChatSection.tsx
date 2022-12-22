import React from 'react';
import ChatSearchBar from '../widgets/SearchBar';
import DaySelectFilter from './DaySelectFilter';
import LocalChatRoomList from './LocalChatRoomList';

// type Props = {}

function FindChatSection() {
  return (
    <section>
      <DaySelectFilter />
      <ChatSearchBar />
      <LocalChatRoomList />
    </section>
  );
}

export default FindChatSection;

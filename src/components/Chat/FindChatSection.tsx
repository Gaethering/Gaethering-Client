import React, { useState } from 'react';
import ChatSearchBar from '../widgets/SearchBar';
import DaySelectFilter from './DaySelectFilter';
import LocalChatRoomList from './LocalChatRoomList';

// type Props = {}

function FindChatSection() {
  const [searchWord, setSearchWord] = useState('');
  return (
    <section>
      <DaySelectFilter />
      <ChatSearchBar searchWord={searchWord} setSearchWord={setSearchWord} />
      <LocalChatRoomList />
    </section>
  );
}

export default FindChatSection;

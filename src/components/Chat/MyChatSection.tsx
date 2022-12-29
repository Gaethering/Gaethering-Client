// import React, { useState } from 'react';
// import ChatSearchBar from '../widgets/SearchBar';
import MyChatRoomList from './MyChatRoomList';

function MyChatSection() {
  // const [searchWord, setSearchWord] = useState('');
  return (
    <section>
      {/* <ChatSearchBar searchWord={searchWord} setSearchWord={setSearchWord} /> */}
      <MyChatRoomList />
    </section>
  );
}

export default MyChatSection;

import React from 'react'
import ChatSearchBar from './ChatSearchBar'
import DaySelectFilter from './DaySelectFilter'
import LocalChatRoomList from './LocalChatRoomList'

type Props = {}

function FindChatSection({}: Props) {
  return (
    <section>
      <DaySelectFilter />
      <ChatSearchBar />
      <LocalChatRoomList />
    </section>
  )
}

export default FindChatSection
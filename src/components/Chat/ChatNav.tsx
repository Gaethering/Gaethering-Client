import React, { Dispatch } from 'react'
import { ChatState } from '../../pages/Chat'

type Props = {setChatState: Dispatch<ChatState>}

function ChatNav({setChatState}: Props) {
  return (
    <div>ChatNav</div>
  )
}

export default ChatNav
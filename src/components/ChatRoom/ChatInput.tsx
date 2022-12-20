import { useState } from 'react';
import { StyledChatInput } from './ChatInput.style';

function ChatInput() {
  const [chat, setChat] = useState('');
  return (
    <StyledChatInput>
      <input
        required
        className="chat-input"
        onChange={(e) => setChat(e.currentTarget.value)}
        value={chat}
      />
      <button
        type={'submit'}
        className="send-chat arrow-button"
        disabled={!chat}
      >
        {'↑'}
      </button>
    </StyledChatInput>
  );
}

export default ChatInput;

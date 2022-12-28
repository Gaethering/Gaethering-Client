import { Client } from '@stomp/stompjs';
import { FormEventHandler, useState } from 'react';
import { StyledChatInput } from './ChatInput.style';

function ChatInput({
  chatService,
  roomKey,
  userId,
}: {
  chatService: Client;
  roomKey: string;
  userId: number;
}) {
  const [chat, setChat] = useState('');
  const [isFirst, setIsFirst] = useState(true);
  const sendMessage: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    
    if (isFirst) {
      chatService.publish({
        destination: `/app/chat.enter.room.${roomKey}`,
        body: JSON.stringify({ memberId: userId, content: '입장' }),
      });
      setIsFirst(false);
    }

    chatService.publish({
      destination: `/app/chat.send.${roomKey}`,
      body: JSON.stringify({ memberId: userId, content: chat }),
    });

    setChat('');
  };

  return (
    <StyledChatInput onSubmit={sendMessage}>
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

import { ChatState } from '../../pages/Chat';
import SectionNav from '../widgets/SectionNav';

interface Props {
  chatState: ChatState;
  setChatState: React.Dispatch<React.SetStateAction<ChatState>>;
}

function ChatNav({ chatState, setChatState }: Props) {
  return (
    <SectionNav<ChatState>
      currentState={chatState}
      setState={setChatState}
      sectionStates={[
        { name: 'ㅁㅁ동 산책모임', state: 'findChat' },
        { name: '내 채팅방', state: 'myChat' },
      ]}
    />
  );
}

export default ChatNav;

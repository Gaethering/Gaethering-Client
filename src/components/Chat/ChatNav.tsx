import { Dispatch, PointerEventHandler } from 'react';
import styled from 'styled-components';
import { ChatState } from '../../pages/Chat';

type Props = { chatState: ChatState; setChatState: Dispatch<ChatState> };

function ChatNav({ chatState, setChatState }: Props) {
  const handleClick: PointerEventHandler<HTMLButtonElement> = ({
    currentTarget: target,
  }) => {
    setChatState(target.name as 'findChat' | 'myChat');
  };

  return (
    <StyledChatNav>
      <NavButton
        type="button"
        onClick={handleClick}
        name="findChat"
        className={chatState === 'findChat' ? 'active' : ''}
      >
        ㅁㅁ동 산책 모임 찾기
      </NavButton>
      <NavButton
        type="button"
        onClick={handleClick}
        name="myChat"
        className={chatState === 'myChat' ? 'active' : ''}
      >
        내 채팅방
      </NavButton>
    </StyledChatNav>
  );
}

export default ChatNav;

const StyledChatNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  margin-top: 2rem;
`;

const NavButton = styled.button`
  flex: 1 0;
  box-sizing: content-box;
  padding-top: 1rem;
  padding-bottom: 0.8rem;
  border-bottom: 0.1rem solid ${({ theme: { color } }) => color.gray2};

  transition: all 0.2s ease-in-out;

  &.active {
    border-bottom: 0.3rem solid ${({ theme: { color } }) => color.black};
    padding-bottom: 0.6rem;
  }

  &:hover {
    background-color: ${({ theme: { color } }) => color.gray4};
  }
`;

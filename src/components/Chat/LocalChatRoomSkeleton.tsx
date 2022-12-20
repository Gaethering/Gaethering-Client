import styled, { keyframes } from 'styled-components';
import Button from '../Form/Button.style';
import { Bottom, Info, StyledLocalChatRoom } from './LocalChatRoom.style';

function LocalChatRoomSkeleton() {
  return (
    <StyledLocalChatRoom>
      <div className="chatroom-title">
        <Block width={28} height={2.4} />
      </div>
      <Block width={22} height={2} />

      <Info>
        <div className="chatroom-participants">
          <BlockTrans width={7} height={2.4} />
        </div>
        <span>
          <Block width={4} height={2} />
        </span>
      </Info>

      <Bottom>
        <div className="chatroom-walking-time">
          <Block width={16} height={5.4} />
        </div>
        <Button btnTheme="main">
          <BlockTrans width={3.5} height={2.4} />
        </Button>
      </Bottom>
    </StyledLocalChatRoom>
  );
}

export default LocalChatRoomSkeleton;

const breathingAnimation = keyframes`
  from {
    opacity: 90%;
  }

  to {
    opacity: 10%;
  }
`;

type BlockType = { width: number; height: number };

const Block = styled.div<BlockType>`
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;

  border-radius: 0.8rem;
  background-color: ${({ theme: { color } }) => color.gray2};

  animation: ${breathingAnimation} infinite ease-in 0.8s alternate;
`;

const BlockTrans = styled.div<BlockType>`
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;

  background-color: none;
`;

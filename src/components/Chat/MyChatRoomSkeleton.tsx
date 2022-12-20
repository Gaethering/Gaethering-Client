import styled, { keyframes } from 'styled-components';
import { Left, Right, StyledMyChatRoom } from './MyChatRoom.style';

function MyChatRoomSkeleton() {
  return (
    <StyledMyChatRoom>
      <div className="skull">
        <Left>
          <h2>
            <Block width={30} height={2.4} />
          </h2>
          <Block width={16} height={2} />
        </Left>
        <Right>
          <Block width={4.4} height={2.4} />
        </Right>
      </div>
    </StyledMyChatRoom>
  );
}

export default MyChatRoomSkeleton;

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

  border-radius: 0.6rem;
  background-color: ${({ theme: { color } }) => color.gray2};

  animation: ${breathingAnimation} infinite ease-in 0.8s alternate;
`;

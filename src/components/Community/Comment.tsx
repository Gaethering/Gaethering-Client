import styled from 'styled-components';
import { ListComment } from '../../api/boardAPI.type';
import useRelativeTime from '../../Hooks/useRelativeTime';

function Comment({
  // commentId,
  // memberId,
  content,
  nickname,
  createdAt,
  // isOwner,
}: ListComment) {
  const date = Date.parse(createdAt).toString();
  const relTime = useRelativeTime(date, 'ko-KR', 'short');
  return (
    <Wrapper>
      <Nickname>{nickname}</Nickname>
      <Content>{content}</Content>
      <Time>{relTime}</Time>
    </Wrapper>
  );
}

export default Comment;

const Wrapper = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: start;

  width: 100%;
  margin: 2rem 0;
`;

const Nickname = styled.h4`
  width: 10rem;
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme: { color } }) => color.gray1};
`;

const Content = styled.p`
  width: calc(100% - 10rem - 7rem);
  flex: 1;

  word-wrap: break-word;

  translate: 0 -0.04rem;

  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme: { color } }) => color.black};
`;

const Time = styled.span`
  width: 7rem;

  text-align: right;
  font-size: 1.4rem;
  font-weight: 300;
  color: ${({ theme: { color } }) => color.gray2};
`;

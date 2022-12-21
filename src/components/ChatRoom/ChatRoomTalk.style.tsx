import styled from 'styled-components';

const StyledTalk = styled.div`
  display: flex;
  align-items: center;

  height: 7rem;
  margin: 1.4rem 2rem;

  img {
    width: 5.6rem;
    height: 5.6rem;

    margin-right: 0.4rem;

    border-radius: 100%;
  }
`;

const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const NameArea = styled.div`
  height: 2rem;
  margin-left: 1.2rem;
  margin-bottom: 0.4rem;

  .chat-pet-name {
    margin-right: 0.4rem;

    font-size: 1.4rem;
    font-weight: 700;
  }

  .chat-user-name {
    color: ${({ theme: { color } }) => color.gray1};
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

const TalkArea = styled.div`
  display: flex;
  align-items: end;

  margin-bottom: 0.6rem;

  .chat-timestamp {
    height: 2rem;

    margin: 0 0.6rem;

    font-size: 1rem;
    font-weight: 400;
  }
`;

export { ChatBox, NameArea, StyledTalk, TalkArea };

import styled from 'styled-components';

const StyledLocalChatRoom = styled.div`
  margin: 3rem;
  padding: 2rem;

  background-color: ${({ theme: { color } }) => color.white};
  border-radius: 1.6rem;
  box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.1);

  .chatroom-title {
    margin-bottom: 0.4rem;
  }

  .chatroom-description {
    height: 2rem;
  }

  .chatroom-walking-time {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 4rem;

  margin: 2rem 0;

  .chatroom-participants {
    padding: 0.2rem 1.4rem;

    border: 0.15rem solid ${({ theme: { color } }) => color.main};
    border-radius: 1rem;

    color: ${({ theme: { color } }) => color.main};
    font-weight: 700;
  }

  span {
    display: flex;
    align-items: center;

    height: 1.6rem;
    box-sizing: border-box;

    padding-left: 2rem;
    border-left: 0.1rem solid ${({ theme: { color } }) => color.gray3};

    color: ${({ theme: { color } }) => color.gray1};
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

export { Bottom, Info, StyledLocalChatRoom };

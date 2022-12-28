import styled from 'styled-components';

export const Blank = styled.div`
  height: 6rem;
`;

export const Chats = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: start;
  justify-content: end;
`;

const StyledChatRoom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  height: calc(100vh - ${({ theme: { size } }) => size.navHeight});
  background-color: ${({ theme: { color } }) => color.skyblue};

  overflow-y: scroll;

  .spinner {
    align-self: center;
    margin-top: 30vh;
  }
`;

export { StyledChatRoom };

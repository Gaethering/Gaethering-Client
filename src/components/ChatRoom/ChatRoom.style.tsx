import styled from 'styled-components';

const StyledChatRoom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  height: calc(100vh - ${({ theme: { size } }) => size.navHeight});
  background-color: ${({ theme: { color } }) => color.skyblue};

  overflow-y: scroll;

  .spinner {
    align-self: center;
    margin-top: 30vh;
  }
`;

export { StyledChatRoom };

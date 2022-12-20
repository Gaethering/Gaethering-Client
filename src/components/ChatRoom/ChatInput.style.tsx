import styled from 'styled-components';

const StyledChatInput = styled.form`
  position: sticky;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: 6rem;
  background-color: ${({ theme: { color } }) => color.gray3};

  .chat-input {
    flex: 1;

    height: 4.4rem;
    margin: 2rem 1rem;
    padding-left: 2rem;

    border-radius: 1rem;

    font-size: 1.6rem;
    font-weight: 500;

    outline: none;

    transition: all 0.1s ease-in-out;

    &:focus {
      border: 0.14rem solid #aaa;
      box-shadow: 0 0 0.4rem 0.2rem rgba(100, 100, 100, 0.2);
    }
  }

  button {
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 100%;

    margin-right: 1rem;

    font-size: 3rem;
    font-weight: 700;
    color: ${({ theme: { color } }) => color.white};

    background-color: ${({ theme: { color } }) => color.main};

    transition: all 0.2s ease-in-out;

    &:hover {
      scale: 103%;
      box-shadow: 0 0 0.4rem 0.2rem rgba(100, 100, 100, 0.1);
    }

    &:disabled {
      font-weight: 500;
      background-color: ${({ theme: { color } }) => color.gray2};

      &:hover {
        scale: 100%;
        box-shadow: none;
      }
    }
  }
`;

export { StyledChatInput };

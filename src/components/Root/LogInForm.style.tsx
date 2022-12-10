import styled from 'styled-components';

const StyledLogInForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 10vh;
  flex-direction: column;

  svg + .input-container {
    margin-top: 7.2rem;
  }

  .input-container {
    width: 80vw;
    max-width: 50rem;
    min-width: 30rem;

    margin-top: 1.2rem;

    + .input-container {
      margin-bottom: 2rem;
    }

    input {
      height: 5.2rem;
      padding-left: 3rem;
      background-color: ${({ theme: { color } }) => color.gray4};
      border: 0;
      border-radius: 1.6rem;

      ::placeholder {
        color: ${({ theme: { color } }) => color.black};
      }
    }
  }

  p.login-error {
    margin: 0.4rem;
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({ theme: { color } }) => color.redPint};
  }

  button {
    margin-top: 1rem;
  }

  .to-signup {
    margin-top: 3rem;
    font-size: 1.6rem;
    font-weight: 700;
  }
`;

export default StyledLogInForm;

import styled from 'styled-components';

export const StyledSignUp = styled.div`
  width: 80vw;
  max-width: 800px;
  min-width: 390px;
  margin: 0 auto;
`;

export const StyledSignUpForm = styled.form`
  h1 {
    margin-bottom: 4rem;
  }

  .signup-row {
    display: flex;
    align-items: flex-end;
    gap: 3rem;

    .input-container {
      flex: 1;
    }
  }

  .input-container {
    margin-top: 3rem;
    margin-left: 0.2rem;

    .label {
      font-size: 1.6rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    input {
      height: 4rem;
    }
  }

  button.form-btn {
    font-size: 1.6rem;
    padding: 0.8rem 2rem;
  }

  .submit-btn {
    font-size: 1.6rem;
    padding: 0.8rem 2rem;

    box-sizing: border-box;
    width: 100%;
    height: 4rem;
    margin-top: 9rem;
  }
`;

export default StyledSignUpForm;

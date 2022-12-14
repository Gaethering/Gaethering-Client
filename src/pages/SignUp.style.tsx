import styled from 'styled-components';

export const StyledSignUp = styled.div`
  width: 80vw;
  max-width: 800px;
  min-width: 390px;
  margin: 0 auto;
  margin-bottom: 6rem;
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

  .signup-error {
    margin-top: 3rem;

    color: ${({ theme: { color } }) => color.redPoint};
    font-size: 1.6rem;
    font-weight: 600;

    & ~ .signup-error {
      margin-top: 0.4rem;
    }
  }
`;

export const BackButton = styled.button`
  padding: 0.4rem 0;
  padding-right: 1rem;
  margin-bottom: 3rem;
  font-size: 3rem;
  font-weight: 700;
  font-feature-settings: 'ss18';

  transition: all 0.3s ease-in-out;

  &:hover {
    translate: -0.6rem;
    font-weight: 800;
  }
`;

export default StyledSignUpForm;

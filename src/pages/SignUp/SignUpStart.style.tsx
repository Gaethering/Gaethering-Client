import styled from 'styled-components';

const StyledSignUpStart = styled.div`
  .email-area {
    display: flex;
    align-items: flex-end;

    .input-container {
      flex: 1;
    }

    button {
      flex-shrink: 0;
      margin-left: 2rem;
    }

    & + .input-container + .input-container {
      margin-top: 1rem;
    }
  }
`;

export default StyledSignUpStart;
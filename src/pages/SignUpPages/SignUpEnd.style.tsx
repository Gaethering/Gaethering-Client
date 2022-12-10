import styled from 'styled-components';
import StyledSignUpForm from '../SignUp.style';

const StyledEnd = styled(StyledSignUpForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .greeting {
    margin-top: 4rem;

    font-size: 3rem;
    font-weight: 600;
  }
`;

export default StyledEnd;

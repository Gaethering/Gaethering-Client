import styled from 'styled-components';
import End from './SignUpEnd';
import Nav from './SignUpNav';
import Pet from './SignUpPet';
import SignProfile from './SignUpProfile';
import Start from './SignUpStart';

function SignUp() {
  return (
    <StyledSignUp>
      <Nav />
    </StyledSignUp>
  );
}

export default SignUp;
export {Start, End, Pet, SignProfile};

const StyledSignUp = styled.div`
  width: 80vw;
  min-width: 390px;
  margin: 0 auto;
`;

const StyledSignUpForm = styled.form`

`;

import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { StyledSignUp } from './SignUp.style';
import { SignUpStep } from './SignUp.type';
import End from './SignUpEnd';
import Nav from './SignUpNav';
import Pet from './SignUpPet';
import SignProfile from './SignUpProfile';
import Start from './SignUpStart';

function SignUp() {
  const [step, setStep] = useState<SignUpStep>(3);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`${step}`);
  }, [navigate, step]);

  return (
    <StyledSignUp>
      <Nav step={step} />
      <button
        onClick={() =>
          step < 4 ? setStep((step + 1) as SignUpStep) : setStep(1)
        }
      >
        next
      </button>
      <Outlet />
    </StyledSignUp>
  );
}

export default SignUp;
export { Start, End, Pet, SignProfile };

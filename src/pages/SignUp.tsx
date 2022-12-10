import { createContext, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { StyledSignUp } from './SignUp.style';
import { SignUpStep } from '../components/SignUp/SignUp.type';

import Nav from '../components/SignUp/SignUpNav';

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

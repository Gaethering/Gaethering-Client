import { Dispatch, useEffect, useState } from 'react';
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom';
import Form, { BackButton, StyledSignUp } from './SignUp.style';
import { SignUpForm, SignUpStep } from '../components/SignUp/SignUp.type';

import Nav from '../components/SignUp/SignUpNav';
import Button from '../components/Form/Button';
import {
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
  UseFormRegisterReturn,
  UseFormReturn,
} from 'react-hook-form';

type SignUpContext = Dispatch<React.SetStateAction<SignUpStep>>;

function SignUp() {
  const [step, setStep] = useState<SignUpStep>(1);
  const navigate = useNavigate();

  const methods = useForm<SignUpForm, SignUpForm>();

  const onSubmit: SubmitHandler<SignUpForm> = (data) => {
    if (step !== 4) {
      console.log(data);
      setStep((prev) => (prev === 1 ? 2 : prev === 2 ? 3 : prev === 3 ? 4 : 1));
    }
  };

  useEffect(() => {
    navigate(`${step}`);
  }, [navigate, step]);

  return (
    <StyledSignUp>
      <Nav step={step} />
      <BackButton
        className="arrow-btn"
        onClick={() =>
          setStep((prev) =>
            prev === 1 ? 1 : prev === 2 ? 1 : prev === 3 ? 2 : 3
          )
        }
      >
        {'←'}
      </BackButton>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <Outlet />
        </Form>
      </FormProvider>
    </StyledSignUp>
  );
}

export function useSignUpForm() {
  return useFormContext<SignUpForm>();
}

export default SignUp;

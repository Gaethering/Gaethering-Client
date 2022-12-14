import { Dispatch, useEffect, useState } from 'react';
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom';
import Form, { BackButton, StyledSignUp } from './SignUp.style';
import { SignUpForm, SignUpStep } from '../components/SignUp/SignUp.type';

import Nav from '../components/SignUp/SignUpNav';
import {
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
} from 'react-hook-form';

function SignUp() {
  const [step, setStep] = useState<SignUpStep>(3);
  const navigate = useNavigate();

  const methods = useForm<SignUpForm, SignUpForm>({ mode: 'onTouched' });

  const prevStep = () => {
    setStep((prev) => (prev === 1 ? 1 : prev === 2 ? 1 : prev === 3 ? 2 : 3));
  };
  const nextStep = () => {
    setStep((prev) => (prev === 1 ? 2 : prev === 2 ? 3 : prev === 3 ? 4 : 1));
  };

  const onSubmit: SubmitHandler<SignUpForm> = (data) => {
    if (step !== 3) {
      console.log(data);
      nextStep();
    } else {
      console.log('submit!', data);
    }
  };

  useEffect(() => {
    navigate(`${step}`);
  }, [navigate, step]);

  return (
    <StyledSignUp>
      <Nav step={step} />
      <BackButton className="arrow-btn" onClick={prevStep}>
        {'←'}
      </BackButton>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <Outlet context={nextStep} />
        </Form>
      </FormProvider>
    </StyledSignUp>
  );
}

export function useSignUpForm() {
  return useFormContext<SignUpForm>();
}
export function useNextStep() {
  return useOutletContext<() => void>();
}

export default SignUp;

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
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
import { postSignUp } from '../api/signUpAPI';
import { SignUpResponse } from '../api/signUpAPI.type';

function SignUp() {
  const [step, setStep] = useState<SignUpStep>(1);
  const [petPicture, setPetPicture] = useState<File | null>(null);
  const [welcome, setWelcome] = useState<SignUpResponse>();
  const navigate = useNavigate();

  const methods = useForm<SignUpForm, SignUpForm>({ mode: 'onTouched' });

  const formData = new FormData();

  const prevStep = () => {
    setStep((prev) => (prev === 1 ? 1 : prev === 2 ? 1 : prev === 3 ? 2 : 3));
  };
  const nextStep = () => {
    setStep((prev) => (prev === 1 ? 2 : prev === 2 ? 3 : prev === 3 ? 4 : 1));
  };

  const onSubmit: SubmitHandler<SignUpForm> = async (data) => {
    if (step !== 3) {
      //! Test
      console.log(data);
      ////Test
      nextStep();
    } else {
      //! Test
      console.log('submit!', data);
      ////Test

      const jsonData = JSON.stringify(data);
      const blob = new Blob([jsonData], { type: 'application/json' });

      formData.append('data', blob);
      formData.append('image', petPicture as File);

      const response = await postSignUp(formData);

      if (response?.status === 201) {
        setWelcome(response.data);
        nextStep();
      } else {
        alert('회원가입에 실패하였습니다.\n' + response?.data);
        setStep(1);
      }
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
          <Outlet context={[setPetPicture, welcome]} />
        </Form>
      </FormProvider>
    </StyledSignUp>
  );
}

export function useSignUpForm() {
  return useFormContext<SignUpForm>();
}

type OutlectCxtType = [Dispatch<SetStateAction<File | null>>, SignUpResponse];

export function useSetPetPicture() {
  return useOutletContext<OutlectCxtType>()[0];
}

export function useWelcome() {
  return useOutletContext<OutlectCxtType>()[1];
}

export default SignUp;

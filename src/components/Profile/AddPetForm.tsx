import { AxiosError } from 'axios';
import showAxiosError from '../../api/showAxiosError';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom';
import Form, { BackButton, StyledSignUp } from '../../pages/SignUp.style';
import { SignUpForm, SignUpStep } from '../SignUp/SignUp.type';
import { PetResponse } from '../../api/profileAPI.typs';

// import Nav from '../SignUp/SignUpNav';
import {
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
} from 'react-hook-form';
import { setAuthToken } from '../../util/setAuthToken';
import AddPet from './AddPet';
import { postPet } from '../../api/profileAPI';
import { useMutation } from 'react-query';

function AddPetForm() {
  // const [step, setStep] = useState<SignUpStep>(1);
  // const [petPicture, setPetPicture] = useState<File | null>(null);
  // const [welcome, setWelcome] = useState<SignUpResponse>();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   //! Mock API
  //   import('../../mocks/browser').then((msw) => msw.worker.stop());
  //   ////
  // }, []);
  const petMutation = useMutation(postPet);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<PetResponse>();

  const methods = useForm<PetResponse, PetResponse>({ mode: 'onTouched' });

  const formData = new FormData();

  const onSubmit: SubmitHandler<PetResponse> = async (data) => {
    //! Test
    console.log('submit!', data);
    petMutation.mutate(data)  
    ////Test

    // const jsonData = JSON.stringify(data);
    // const blob = new Blob([jsonData], { type: 'application/json' });

    // formData.append('image', petPicture as File);
    // formData.append('data', blob);

    // const response = await postPet(formData);

    // if (response?.status === 201 || response?.status === 200) {
    //   setWelcome(response.data);
    //   login();
    //   nextStep();
    // } else {
    //   alert('회원가입에 실패하였습니다.\n' + response?.data);
    //   setStep(1);
    // }
    // }
  };

  // useEffect(() => {
  //   navigate(`${step}`);
  // }, [navigate, step]);

  return (
    <StyledSignUp>
      {/* <Nav step={step} /> */}
      {/* <BackButton className="arrow-btn" onClick={prevStep}> */}
      {/* {'←'} */}
      {/* </BackButton> */}
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <AddPet />
          {/* <Outlet context={[setPetPicture, welcome]} /> */}
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

export default AddPetForm;

import { StyledPet } from './Pet.style';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../Form/Button';
import Input from '../Form/Input';
import SelectInput from '../Form/SelectInput';
import { StyledEditForm } from './Pet.style';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { postPet } from '../../api/profileAPI';
import validDate from '../../util/validDate';
import { QueryKeys } from '../../api/QueryKeys';
import { useState } from 'react';
import PicturesInput from './PicturesInput';
import { AxiosError } from 'axios';
import showAxiosError from '../../api/showAxiosError';
import { PetResponse } from '../../api/profileAPI.typs';

interface AddPetType {
  petName: string;
  petBirth: string;
  petGender: string;
  breed: string;
  weight: number;
  isNeutered: boolean;
  description: string;
  // imageUrl: string;
}

function AddPet() {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation<PetResponse, AxiosError, FormData>(
    postPet,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QueryKeys.user);
        // setImages(null);
        // navigate('../');
      },
      onError: (error) => showAxiosError(error),
    }
  );

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<AddPetType>();

  const [images, setImages] = useState<File>();

  const onSubmit: SubmitHandler<AddPetType> = (data) => {
    console.log('onsubmit');
    const formData = new FormData();
    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: 'application/json' });

    if (!images) {
      return;
    }
    formData.append('image', images);
    formData.append('data', blob);
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    console.log('da', data);
    formData.forEach((value) => console.log(value));
    console.log('fo', formData.entries());
    mutate(formData);
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <StyledPet>
      <StyledEditForm onSubmit={handleSubmit(onSubmit)}>
        <h1>???????????? ??????</h1>
        <div className="title_section">
          <PicturesInput setImages={setImages} disabled={isLoading} />
          <div className="name_input">
            <Input
              name="petName"
              register={register}
              label="??????"
              plHolder="8??? ??????"
              options={{
                required: '????????? ??????????????????',
                maxLength: {
                  value: 8,
                  message: '????????? 8??? ????????? ??????????????????',
                },
                disabled: isLoading,
              }}
            />
          </div>
        </div>
        <div className="profile_section">
          <div className="age_input input_row">
            <Input
              name="petBirth"
              register={register}
              label="??????"
              type="date"
              options={{
                disabled: isLoading,
                required: '????????? ??????????????????',
                validate: (value) =>
                  validDate(value.toString(), 1980) || '????????? ?????????????????????',
              }}
            />
          </div>
          <div className="one_row">
            <div className="breed_input input_row">
              <Input
                name="breed"
                register={register}
                label="??????"
                plHolder="????????? ???????????????"
                options={{
                  required: '????????? ??????????????????(??????, ??????????????? ???)',
                  maxLength: {
                    value: 10,
                    message: '????????? 10??? ????????? ??????????????????',
                  },
                  disabled: isLoading,
                }}
              />
            </div>
            <div className="weight_input input_row">
              <Input
                name="weight"
                register={register}
                type="number"
                label="?????????"
                plHolder="????????? ??????????????????"
                required={true}
                options={{
                  required: '???????????? ??????????????????',
                  valueAsNumber: true,
                  max: {
                    value: 200,
                    message: '???????????? ?????????????????????',
                  },
                  disabled: isLoading,
                }}
              />
            </div>
          </div>
          <div className="description_input column">
            <Input
              name="description"
              register={register}
              label="??????"
              plHolder="100??? ??????"
              options={{
                required: '????????? ??????????????????',
                maxLength: {
                  value: 100,
                  message: '????????? 100??? ????????? ??????????????????',
                },
                disabled: isLoading,
              }}
            />
          </div>
          <div className="one_row">
            <div className="select_gender select column">
              <SelectInput<AddPetType, AddPetType['petGender']>
                name="petGender"
                label="??????"
                register={register}
                values={['FEMALE', 'MALE']}
                valueLabels={['??????', '??????']}
                options={{
                  required: '????????? ??????????????????',
                  disabled: isLoading,
                }}
              />
            </div>
            <div className="select_neutralization select column">
              <SelectInput<AddPetType, AddPetType['isNeutered']>
                name="isNeutered"
                label="????????? ??????"
                register={register}
                values={[true, false]}
                valueLabels={['??????', '?????????']}
                options={{
                  required: '????????? ????????? ??????????????????',
                  disabled: isLoading,
                }}
              />
            </div>
          </div>
        </div>

        {errors.petName && (
          <p className="signup-error">{errors.petName.message}</p>
        )}
        {errors.petBirth && (
          <p className="signup-error">{errors.petBirth.message}</p>
        )}
        {errors.breed && <p className="signup-error">{errors.breed.message}</p>}
        {errors.weight && (
          <p className="signup-error">{errors.weight.message}</p>
        )}
        {errors.description && (
          <p className="signup-error">{errors.description.message}</p>
        )}
        {errors.petGender && (
          <p className="signup-error">{errors.petGender.message}</p>
        )}
        {errors.isNeutered && (
          <p className="signup-error">{errors.isNeutered.message}</p>
        )}

        <div className="buttons">
          <Button
            btnTheme="sub"
            type="button"
            className="btn_cancel"
            onClick={goBack}
          >
            ??????
          </Button>
          <Button
            btnTheme="main"
            type="submit"
            disabled={!isValid || isLoading}
            className="btn_save"
          >
            ??????
          </Button>
        </div>
      </StyledEditForm>
    </StyledPet>
  );
}

export default AddPet;

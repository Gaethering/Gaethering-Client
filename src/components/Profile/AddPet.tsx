import { StyledPet } from './Pet.style';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../Form/Button';
import Input from '../Form/Input';
import SelectInput from '../Form/SelectInput';
import { StyledEditForm } from './Pet.style';
import { EditPetForm } from './Profile.type';
import { useParams, useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  postPet,
  getPetProfile,
  patchPetProfile,
  getUserProfile,
} from '../../api/profileAPI';
import validDate from '../../util/validDate';
import { QueryKeys } from '../../api/QueryKeys';
import { useState } from 'react';
import PicturesInput from './PicturesInput';
import { AxiosError } from 'axios';
import showAxiosError from '../../api/showAxiosError';

interface AddPetType {
  name: string;
  birth: string;
  gender: string;
  breed: string;
  weight: number;
  isNeutered: boolean;
  description: string;
  imageUrl: string;
}

//! Mock API
import { worker } from '../../mocks/browser';

worker.stop();
////

function AddPet() {
  const queryClient = useQueryClient();
  // const { data, isLoading } = useQuery(QueryKeys.userProfile, getUserProfile);
  const { mutate, isLoading } = useMutation<AddPetType, AxiosError, FormData>(
    postPet,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QueryKeys.user);
        setImages([]);
        navigate('../');
      },
      onError: (error) => showAxiosError(error),
    },
  );

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<AddPetType>();

  const [images, setImages] = useState<File[]>([]);

  
  const onSubmit:SubmitHandler<AddPetType> = (data) => {
  // const onSubmit: SubmitHandler<AddPetType> = (data) => {
    console.log('onsubmit')
    const formData = new FormData();
    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: 'application/json' });

    images[0] ?? formData.append('images', new Blob());
    images.forEach((img) => formData.append('images', img));
    formData.append('data', blob);

    console.log('da',data);
    console.log('fo',formData);
    mutate(formData);
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <StyledPet>
      <StyledEditForm>
        {/* <StyledEditForm onSubmit={handleSubmit(onSubmit)}> */}
        <h1>반려동물 추가</h1>
        <div className="title_section">
          <PicturesInput disabled={isLoading} />
          <div className="name_input">
            <Input
              name="name"
              register={register}
              label="이름"
              plHolder="8자 이하"
              options={{
                required: '이름을 입력해주세요',
                maxLength: {
                  value: 8,
                  message: '이름은 8자 이하로 입력해주세요',
                },
                disabled: isLoading,
              }}
            />
          </div>
        </div>
        <div className="profile_section">
          <div className="age_input input_row">
            <Input
              name="birth"
              register={register}
              label="생일"
              type="date"
              options={{
                disabled: isLoading,
                required: '생일을 입력해주세요',
                validate: (value) =>
                  validDate(value.toString(), 1980) || '생일이 잘못되었습니다',
              }}
            />
          </div>
          <div className="one_row">
            <div className="breed_input input_row">
              <Input
                name="breed"
                register={register}
                label="견종"
                plHolder="견종을 알려주세요"
                options={{
                  required: '견종을 입력해주세요(믹스, 포메라니안 등)',
                  maxLength: {
                    value: 10,
                    message: '견종은 10자 이하로 입력해주세요',
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
                label="몸무게"
                plHolder="숫자만 입력해주세요"
                required={true}
                options={{
                  required: '몸무게를 입력해주세요',
                  valueAsNumber: true,
                  max: {
                    value: 200,
                    message: '몸무게가 잘못되었습니다',
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
              label="소개"
              plHolder="100자 이하"
              options={{
                required: '소개를 입력해주세요',
                maxLength: {
                  value: 100,
                  message: '소개를 100자 이하로 입력해주세요',
                },
                disabled: isLoading,
              }}
            />
          </div>
          <div className="one_row">
            <div className="select_gender select column">
              <SelectInput<AddPetType, AddPetType['gender']>
                name="gender"
                label="성별"
                register={register}
                values={['FEMALE', 'MALE']}
                valueLabels={['여아', '남아']}
                options={{
                  required: '성별을 입력해주세요',
                  disabled: isLoading,
                }}
              />
            </div>
            <div className="select_neutralization select column">
              <SelectInput<AddPetType, AddPetType['isNeutered']>
                name="isNeutered"
                label="중성화 여부"
                register={register}
                values={[true, false]}
                valueLabels={['했음', '안 했음']}
                options={{ required: '중성화 여부를 입력해주세요', disabled: isLoading, }}
              />
            </div>
          </div>
        </div>

        {errors.name && <p className="signup-error">{errors.name.message}</p>}
        {errors.birth && <p className="signup-error">{errors.birth.message}</p>}
        {errors.breed && <p className="signup-error">{errors.breed.message}</p>}
        {errors.weight && (
          <p className="signup-error">{errors.weight.message}</p>
        )}
        {errors.description && (
          <p className="signup-error">{errors.description.message}</p>
        )}
        {errors.gender && (
          <p className="signup-error">{errors.gender.message}</p>
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
            취소
          </Button>
          <Button
            btnTheme="main"
            type="submit"
            disabled={!isValid || isLoading}
            className="btn_save"
            onClick={onSubmit}
          >
            저장
          </Button>
        </div>
      </StyledEditForm>
    </StyledPet>
  );
}

export default AddPet;

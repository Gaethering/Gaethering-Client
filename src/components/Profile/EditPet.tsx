import PetImage from './PetImage';
import { StyledPet } from './Pet.style';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../Form/Button';
import Input from '../Form/Input';
import SelectInput from '../Form/SelectInput';
import { StyledEditForm } from './Pet.style';
import { EditPetForm } from './Profile.type';
import { useParams, useNavigate, redirect } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getPetProfile, patchPetProfile } from '../../api/profileAPI';
import validDate from '../../util/validDate';
import { QueryKeys } from '../../api/QueryKeys';
import StyledButton from '../Form/Button.style';
import { useState, useEffect } from 'react';


function EditPet() {
  useEffect(() => {
    //! Mock API
    import('../../mocks/browser').then((msw) => {
      msw.worker.context.isMockingEnabled && msw.worker.stop();
    });
    ////
  }, []);

  const queryClient = useQueryClient();
  const { petID } = useParams();
  const petData = useQuery([QueryKeys.petProfile, petID], () =>
    getPetProfile(petID)
  );
  const fetch = (data) => patchPetProfile(petID, data)
  const petMutation = useMutation(fetch, {
    onSuccess: () => {
      queryClient.invalidateQueries(QueryKeys.pet);
    },
  });
  console.log('ee', petData.data);
  // const editPetMutation = useMutation(patchPetProfile)

  const initValues = {
    name: petData.data?.name,
    birth: petData.data?.birth,
    gender: petData.data?.gender,
    breed: petData.data?.breed,
    weight: petData.data?.weight,
    description: `${petData.data?.description}`,
    isNeutered: petData.data?.isNeutered,
    imageUrl: petData.data?.imageUrl,
  };

  const [values, setValues] = useState(initValues);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<EditPetForm>({ defaultValues: values });

  const onSubmit: SubmitHandler<EditPetForm> = (data) => {
    console.log('epsub', data);
    petMutation.mutate(data);
    setValues(data)
    // goBack()
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <StyledPet>
      <StyledEditForm onSubmit={handleSubmit(onSubmit)}>
        <div className="title_section">
          <PetImage
            src={petData.data?.imageUrl}
            name={petData.data?.name}
            className="pet_img"
          />
          <div className="name_input">
            <Input
              name="name"
              register={register}
              label="이름"
              plHolder="2자 이상 8자 이하"
              options={{}}
            />
            <div className="button_section">
              <Button
                btnTheme="sub"
                type="button"
                className="btn_cancel"
                onClick={goBack}
              >
                취소
              </Button>
              <StyledButton
                btnTheme="main"
                type="submit"
                className="btn_save"
              >
                저장
              </StyledButton>
            </div>
          </div>
        </div>
        <div className="profile_section">
          <div className="age_input input_row">
            <Input
              name="birth"
              register={register}
              label="생일"
              type="date"
              plHolder="숫자만 입력해주세요"
              options={{
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
                plHolder="견종을 알려주세요(필수 아님)"
                options={{}}
              />
            </div>
            <div className="weight_input input_row">
              <Input
                name="weight"
                register={register}
                type="number"
                label="몸무게"
                plHolder="숫자만 입력해주세요"
                options={{}}
              />
            </div>
          </div>
          <div className="description_input column">
            <Input
              name="description"
              register={register}
              label="소개"
              plHolder="100자 이하"
              options={{}}
            />
          </div>
          <div className="one_row">
            <div className="select_gender select column">
              <SelectInput<EditPetForm, EditPetForm['gender']>
                name="gender"
                label="성별"
                register={register}
                values={['FEMALE', 'MALE']}
                valueLabels={['여아', '남아']}
                values={['FEMALE', 'MALE']}
                valueLabels={['여아', '남아']}
              />
            </div>
            <div className="select_neutralization select column">
              <SelectInput<EditPetForm, EditPetForm['isNeutered']>
                name="isNeutered"
                label="중성화 여부"
                register={register}
                values={[true, false]}
                valueLabels={['완료', '미완료']}
              />
            </div>
          </div>
        </div>
      </StyledEditForm>
    </StyledPet>
  );
}

export default EditPet;

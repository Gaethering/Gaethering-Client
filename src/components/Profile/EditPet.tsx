import PetImage from './PetImage';
import { StyledPet } from './Pet.style';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../Form/Button';
import Input from '../Form/Input';
import SelectInput from '../Form/SelectInput';
import { StyledEditForm } from './Pet.style';
import { EditPetForm } from './Profile.type';
import { useParams, useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getPetProfile, patchPetProfile } from '../../api/profileAPI';
import validDate from '../../util/validDate';
import { QueryKeys } from '../../api/QueryKeys';
import StyledButton from '../Form/Button.style';
import { useState } from 'react';
import { PetResponse } from '../../api/profileAPI.typs';

function EditPet() {
  const queryClient = useQueryClient();
  const { petID: petIDString } = useParams();
  const petID = parseInt(petIDString ?? '');
  const petData = useQuery([QueryKeys.petProfile, petID], () =>
    getPetProfile(petID)
  );
  const fetch = (data: PetResponse) => patchPetProfile(petID, data);
  const petMutation = useMutation(fetch, {
    onSuccess: () => {
      queryClient.invalidateQueries(QueryKeys.pet);
    },
  });
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

  const { register, handleSubmit } = useForm<EditPetForm>({
    defaultValues: values,
  });

  const onSubmit: SubmitHandler<EditPetForm> = (data) => {
    petMutation.mutate(data);
    setValues(data);
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
              label="??????"
              plHolder="2??? ?????? 8??? ??????"
              options={{}}
            />
            <div className="button_section">
              <Button
                btnTheme="sub"
                type="button"
                className="btn_cancel"
                onClick={goBack}
              >
                ??????
              </Button>
              <StyledButton btnTheme="main" type="submit" className="btn_save">
                ??????
              </StyledButton>
            </div>
          </div>
        </div>
        <div className="profile_section">
          <div className="age_input input_row">
            <Input
              name="birth"
              register={register}
              label="??????"
              type="date"
              plHolder="????????? ??????????????????"
              options={{
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
                plHolder="????????? ???????????????(?????? ??????)"
                options={{}}
              />
            </div>
            <div className="weight_input input_row">
              <Input
                name="weight"
                register={register}
                type="number"
                label="?????????"
                plHolder="????????? ??????????????????"
                options={{}}
              />
            </div>
          </div>
          <div className="description_input column">
            <Input
              name="description"
              register={register}
              label="??????"
              plHolder="100??? ??????"
              options={{}}
            />
          </div>
          <div className="one_row">
            <div className="select_gender select column">
              <SelectInput<EditPetForm, EditPetForm['gender']>
                name="gender"
                label="??????"
                register={register}
                values={['FEMALE', 'MALE']}
                valueLabels={['??????', '??????']}
              />
            </div>
            <div className="select_neutralization select column">
              <SelectInput<EditPetForm, EditPetForm['isNeutered']>
                name="isNeutered"
                label="????????? ??????"
                register={register}
                values={[true, false]}
                valueLabels={['??????', '?????????']}
              />
            </div>
          </div>
        </div>
      </StyledEditForm>
    </StyledPet>
  );
}

export default EditPet;

import PetImage from './PetImage';
import { StyledPet } from './Pet.style';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../Form/Button';
import Input from '../Form/Input';
import SelectInput from '../Form/SelectInput';
import { StyledEditForm } from './Pet.style';
import { EditPetForm } from './Edit.type';

interface EditPetType {
  petName: string;
  petAge: number;
  breed: string;
  petWeight: number;
  petDescription: string;
  petGender: string;
  neutralization: string;
}

function EditPet() {
  //임시 데이터
  const petData = {
    name: '해삐',
    age: 6,
    gender: '남아',
    breed: '말티즈',
    weight: 5.5,
    isNeutered: true,
    description: '말을 잘들어요',
    imageUrl:
      'https://images.pexels.com/photos/13215915/pexels-photo-13215915.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  };

  const defaultValues = {
    petName: `${petData.name}`,
    petAge: petData.age,
    breed: `${petData.breed}`,
    petWeight: petData.weight,
    petDescription: `${petData.description}`,
    petGender: `${petData.gender}`,
    neutralization: petData.isNeutered === true ? '완료' : '미완료',
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<EditPetType>({ defaultValues });

  const onSubmit: SubmitHandler<EditPetType> = (data) => {
    console.log(data);
  };

  return (
    <StyledPet>
      <StyledEditForm onSubmit={handleSubmit(onSubmit)}>
        <div className="title_section">
          <PetImage
            src={petData.imageUrl}
            id={petData.name}
            className="pet_img"
          />
          <div className="name_input">
            <Input
              name="petName"
              register={register}
              label=""
              plHolder="2자 이상 8자 이하"
              options={{}}
            />
            <div className="button_section">
              <Button btnTheme="sub" type="button" className="btn_cancel">
                취소
              </Button>
              <Button btnTheme="main" type="submit" className="btn_save">
                저장
              </Button>
            </div>
          </div>
        </div>
        <div className="profile_section">
          <div className="age_input input_row">
            <Input
              name="petAge"
              register={register}
              label="나이"
              plHolder="숫자만 입력해주세요"
              options={{}}
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
                name="petWeight"
                register={register}
                label="몸무게"
                plHolder="숫자만 입력해주세요"
                options={{}}
              />
            </div>
          </div>
          <div className="description_input column">
            <Input
              name="petDescription"
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

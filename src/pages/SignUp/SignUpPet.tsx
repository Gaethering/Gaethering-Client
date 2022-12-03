import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import SelectInput from '../../components/Form/SelectInput';
import PetPicture from './PetPicture';
import Form from './SignUp.style';

interface SignUpPetType {
  petName: string;
  petAge: number;
  breed: string;
  petWeight: number;
  petDescription: string;
  petGender: string;
  neutralization: boolean;
}

function SignUpPet() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpPetType>();

  const onSubmit: SubmitHandler<SignUpPetType> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>반려동물 등록</h1>
        <PetPicture />
        <Input
          name="petName"
          register={register}
          label="이름"
          plHolder="2자 이상 8자 이하"
          options={{}}
        />
        <Input
          name="petAge"
          register={register}
          label="나이"
          plHolder="숫자만 입력해주세요"
          options={{}}
        />
        <div className="signup-row">
          <Input
            name="breed"
            register={register}
            label="견종"
            plHolder="견종을 알려주세요(필수 아님)"
            options={{}}
          />
          <Input
            name="petWeight"
            register={register}
            label="몸무게"
            plHolder="숫자만 입력해주세요"
            options={{}}
          />
        </div>
        <Input
          name="petDescription"
          register={register}
          label="소개"
          plHolder="100자 이하"
          options={{}}
        />
        <div className="signup-row">
          <SelectInput
            name="petGender"
            label="성별"
            register={register}
            values={['여아', '남아']}
          />
          <SelectInput
            name="neutralization"
            label="중성화 여부"
            register={register}
            values={['했음', '안 했음']}
          />
        </div>
        <Button type="submit" btnTheme="sub" className="submit-btn">
          다음
        </Button>
      </Form>
    </div>
  );
}

export default SignUpPet;

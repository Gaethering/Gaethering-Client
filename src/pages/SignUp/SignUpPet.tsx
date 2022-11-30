import { useForm } from 'react-hook-form';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import { StyledSignUpForm as Form } from './SignUp.style';

function SignUpPet() {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <Form>
        <h1>반려동물 등록</h1>
        <div>사진 등록</div>
        <Input
          name="petName"
          register={register}
          label="이름"
          plHolder="2자 이상 8자 이하"
          options={{}}
        />
        <Input
          name="petName"
          register={register}
          label="나이"
          plHolder="숫자만 입력해주세요"
          options={{}}
        />
        <div className="signup-row">
          <Input
            name="petName"
            register={register}
            label="견종"
            plHolder="견종을 알려주세요(필수 아님)"
            options={{}}
          />
          <Input
            name="petName"
            register={register}
            label="몸무게"
            plHolder="숫자만 입력해주세요"
            options={{}}
          />
        </div>
        <Input
          name="petName"
          register={register}
          label="소개"
          plHolder="100자 이하"
          options={{}}
        />
        <div className="signup-row">
          <Input name="petName" register={register} label="성별" options={{}} />
          <Input
            name="petName"
            register={register}
            label="중성화 여부"
            options={{}}
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

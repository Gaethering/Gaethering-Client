import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import SelectInput from '../../components/Form/SelectInput';
import { BIRTH_REGEX } from '../../data/regExp';
import Form from './SignUp.style';

interface SignUpProfileType {
  userName: string;
  nickname: string;
  birth: number;
  gender: 'male' | 'female';
}

function SignUpProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpProfileType>();

  const onSubmit: SubmitHandler<SignUpProfileType> = (data) => {
    console.log(data);
  };

  return (
    <StyledSignUpProfile>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>프로필 등록</h1>
        <Input
          name="userName"
          register={register}
          label="이름"
          plHolder="실명을 입력해주세요"
          options={{
            required: '이름을 입력해주세요',
          }}
        />
        <div className="signup-row">
          <Input
            name="birth"
            register={register}
            label="생년월일"
            plHolder="YYYYMMDD (숫자만 입력)"
            options={{
              pattern: {
                value: BIRTH_REGEX,
                message: '올바른 형식이 아닙니다(예: 19990420)',
              },
            }}
          />
          <SelectInput
            name="gender"
            register={register}
            label="성별"
            values={['여성', '남성']}
          />
        </div>
        <Input
          name="nickname"
          register={register}
          label="별명"
          plHolder="2글자 이상 10글자 이하로 입력해주세요"
          options={{
            required: '별명을 입력해주세요',
          }}
        />
        {errors.userName && (
          <p className="login-error">{errors.userName.message}</p>
        )}
        {errors.birth && <p className="login-error">{errors.birth.message}</p>}
        {errors.nickname && (
          <p className="login-error">{errors.nickname.message}</p>
        )}
        <Button type="submit" btnTheme="sub" className="submit-btn">
          다음
        </Button>
      </Form>
    </StyledSignUpProfile>
  );
}

export default SignUpProfile;

const StyledSignUpProfile = styled.div`
`;

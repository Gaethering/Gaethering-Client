import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import SelectInput from '../../components/Form/SelectInput';
import { useSignUpForm } from '../SignUp';

function SignUpProfile() {
  const {
    register,
    formState: { errors, isValid },
  } = useSignUpForm();

  return (
    <div>
      <h1>프로필 등록</h1>
      <Input
        name="userName"
        register={register}
        label="이름"
        plHolder="실명을 입력해주세요"
        options={{
          required: '이름을 입력해주세요',
          minLength: {
            value: 2,
            message: '이름은 2자 이상으로 입력해주세요',
          },
          maxLength: {
            value: 8,
            message: '이름은 8자 이하로 입력해주세요',
          },
        }}
      />
      <div className="signup-row">
        <Input
          name="birth"
          register={register}
          label="생년월일"
          type="date"
          options={{
            valueAsDate: true,
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
          minLength: {
            value: 2,
            message: '2글자 이상 10글자 이하로 입력해주세요',
          },
          maxLength: {
            value: 10,
            message: '2글자 이상 10글자 이하로 입력해주세요',
          },
        }}
      />
      {errors.userName && (
        <p className="signup-error">{errors.userName.message}</p>
      )}
      {errors.birth && <p className="signup-error">{errors.birth.message}</p>}
      {errors.nickname && (
        <p className="signup-error">{errors.nickname.message}</p>
      )}
      <Button type="submit" className="submit-btn" disabled={!isValid}>
        {isValid ? '다음' : '모든 항목을 입력해주세요'}
      </Button>
    </div>
  );
}

export default SignUpProfile;

import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../../data/regExp';
import { useSignUpForm } from '../SignUp';
import StyledSignUpStart from './SignUpStart.style';

function SignUpStart() {
  const {
    register,
    formState: { errors, isValid },
    getValues,
  } = useSignUpForm();

  return (
    <StyledSignUpStart>
      <h1>개더링 가입하기</h1>
      <div className="email-area">
        <Input
          name="email"
          register={register}
          label="이메일(아이디)"
          plHolder="expample@email.com"
          options={{
            required: '아이디를 입력해주세요',
            pattern: {
              value: EMAIL_REGEX,
              message: '올바른 이메일 형식이 아닙니다',
            },
          }}
        />
        <Button btnTheme="main" type="button" className="form-btn">
          이메일 인증
        </Button>
      </div>
      <Input
        name="password"
        type="password"
        register={register}
        label="비밀번호"
        plHolder="특수문자 포함 8자리 이상 16자리 이하"
        options={{
          required: '비밀번호를 입력해주세요',
          pattern: {
            value: PASSWORD_REGEX,
            message:
              '올바른 비밀번호 형식이 아닙니다(특수문자 포함 8자리 이상 16자리 이하)',
          },
        }}
      />
      <Input
        name="passwordCheck"
        type="password"
        register={register}
        plHolder="비밀번호 확인"
        options={{
          required: '비밀번호를 한 번 더 입력해주세요',
          validate: (v) =>
            getValues('password') === v || '비밀번호가 일치하지 않습니다',
          shouldUnregister: true,
        }}
      />
      {errors.email && <p className="signup-error">{errors.email.message}</p>}
      {errors.password && (
        <p className="signup-error">{errors.password.message}</p>
      )}
      {errors.passwordCheck && (
        <p className="signup-error">{errors.passwordCheck.message}</p>
      )}
      <Button type="submit" disabled={!isValid} className="submit-btn">
        다음
      </Button>
    </StyledSignUpStart>
  );
}

export default SignUpStart;

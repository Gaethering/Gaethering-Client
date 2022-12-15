import { useState } from 'react';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import StyledInput from '../../components/Form/Input.style';
import { emailAuthCheck } from '../../components/SignUp/emailAuth';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../../data/regExp';
import { useSignUpForm } from '../SignUp';
import StyledSignUpStart from './SignUpStart.style';

function SignUpStart() {
  const {
    register,
    resetField,
    formState: {
      errors,
      isValid,
      dirtyFields: { email: emailDirty },
    },
    setValue,
    getValues,
  } = useSignUpForm();
  const [emailAuth, setEmailAuth] = useState(false);
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const canEmailAuth = emailDirty && !errors.email;

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
        {emailAuth ? (
          <Button
            className="form-btn"
            btnTheme="sub"
            onClick={() => {
              resetField('email');
              setEmailAuth(false);
            }}
          >
            이메일 재인증
          </Button>
        ) : (
          <Button
            className="form-btn"
            disabled={!canEmailAuth}
            onClick={() => canEmailAuth && setEmailAuth(true)}
          >
            이메일 인증
          </Button>
        )}
      </div>
      {emailAuth && (
        <div className="email-area">
          <StyledInput className="input-container">
            <label>
              이메일을 발송했습니다
              <input placeholder="인증 코드를 입력해주세요" required={true} />
            </label>
          </StyledInput>
          <Button
            btnTheme="main"
            type="button"
            className="form-btn"
            onClick={() => {
              if (emailAuthCheck()) {
                setIsEmailChecked(true);
                setValue('isEmailAuth', true);
              }
            }}
          >
            인증하기
          </Button>
        </div>
      )}
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
          // shouldUnregister: true,
        }}
      />
      {emailDirty && !isEmailChecked && (
        <p className="signup-error">이메일 인증을 완료해주세요</p>
      )}
      {errors.email && <p className="signup-error">{errors.email.message}</p>}
      {errors.password && (
        <p className="signup-error">{errors.password.message}</p>
      )}
      {errors.passwordCheck && (
        <p className="signup-error">{errors.passwordCheck.message}</p>
      )}
      <Button
        type="submit"
        disabled={!isEmailChecked || !isValid}
        className="submit-btn"
      >
        다음
      </Button>
    </StyledSignUpStart>
  );
}

export default SignUpStart;

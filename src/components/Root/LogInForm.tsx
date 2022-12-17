import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import { postLogIn } from '../../api/authAPI';
import { LogInRequest } from '../../api/authAPI.type';
import LogoWithTitle from '../../assets/LogoWithTitle';
import Button from '../Form/Button';
import Input from '../Form/Input';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../../data/regExp';
import StyledLogInForm from './LogInForm.style';
import { SetAuthType } from '../../pages/Root';
import { QueryKeys } from '../../api/QueryKeys';
import { setAxiosHeaderToken } from '../../api/axiosConfig';
import { AxiosError } from 'axios';
import showAxiosError from '../../api/showAxiosError';

// function LogInForm({ getAuth }: { getAuth: () => void }) {
function LogInForm({ setAuth }: { setAuth: SetAuthType }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LogInRequest>({ mode: 'onTouched' });

  const login = useMutation((loginData: LogInRequest) => postLogIn(loginData), {
    onSuccess: (response) => {
      if (!response) {
        return;
      }
      const { accessToken, refreshToken } = response.data;

      //! TEST
      console.log('token:', accessToken, refreshToken);

      setAxiosHeaderToken(accessToken);
      localStorage.setItem(QueryKeys.refreshToken, refreshToken);

      setAuth(true);
    },

    onError: (error) => {
      if (error instanceof AxiosError) {
        showAxiosError(error);

        alert('잘못된 이메일 혹은 패스워드 입니다.');
      }
    },
  });

  const onSubmit: SubmitHandler<LogInRequest> = (data) => {
    console.log('LogIn', data);
    login.mutate(data);
  };

  return (
    <>
      <StyledLogInForm onSubmit={handleSubmit(onSubmit)}>
        <LogoWithTitle width={200} />
        <Input
          name="email"
          plHolder="아이디(이메일)"
          register={register}
          options={{
            required: '아이디를 입력해주세요',
            disabled: login.isLoading,
            pattern: {
              value: EMAIL_REGEX,
              message: '올바른 이메일 형식이 아닙니다',
            },
          }}
        />
        <Input
          name="password"
          plHolder="비밀번호"
          register={register}
          type="password"
          options={{
            required: '비밀번호를 입력해주세요',
            disabled: login.isLoading,
            pattern: {
              value: PASSWORD_REGEX,
              message: '올바른 비밀번호 형식이 아닙니다',
            },
          }}
        />
        {errors.email && <p className="login-error">{errors.email.message}</p>}
        {errors.password && (
          <p className="login-error">{errors.password.message}</p>
        )}

        {login.isError && (
          <p className="login-error">잘못된 이메일 혹은 패스워드 입니다.</p>
        )}

        <Button
          className={login.isLoading ? 'loading' : ''}
          type="submit"
          btnTheme="main"
          disabled={login.isLoading || !isValid}
        >
          시작하기
        </Button>
        <Link to="/signUp/1" className="to-signup">
          개더링 회원가입하기
        </Link>
      </StyledLogInForm>
    </>
  );
}

export default LogInForm;

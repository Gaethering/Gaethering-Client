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

// function LogInForm({ getAuth }: { getAuth: () => void }) {
function LogInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInRequest>();

  const login = useMutation(async (loginData: LogInRequest) => {
    await postLogIn(loginData);
    // getAuth();
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
          name="id"
          plHolder="아이디(이메일)"
          register={register}
          options={{
            required: '아이디를 입력해주세요',
            pattern: {
              value: EMAIL_REGEX,
              message: '올바른 이메일 형식이 아닙니다',
            },
          }}
        />
        <Input
          name="pw"
          plHolder="비밀번호"
          register={register}
          type="password"
          options={{
            required: '비밀번호를 입력해주세요',
            pattern: {
              value: PASSWORD_REGEX,
              message: '올바른 비밀번호 형식이 아닙니다',
            },
          }}
        />
        {errors.id && <p className="login-error">{errors.id.message}</p>}
        {errors.pw && <p className="login-error">{errors.pw.message}</p>}
        <Button type="submit" btnTheme="main">
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

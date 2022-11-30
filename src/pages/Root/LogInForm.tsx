import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoWithTitle from '../../assets/LogoWithTitle';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../../data/regExp';

interface LogInType {
  id: string;
  pw: string;
}

function LogInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInType>();

  const onSubmit: SubmitHandler<LogInType> = (data) => {
    console.log('LogIn', data);
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

const StyledLogInForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 10vh;
  flex-direction: column;

  svg + .input-container {
    margin-top: 7.2rem;
  }

  .input-container {
    width: 80vw;
    max-width: 50rem;
    min-width: 30rem;

    margin-top: 1.2rem;

    + .input-container {
      margin-bottom: 2rem;
    }

    input {
      height: 5.2rem;
      padding-left: 3rem;
      background-color: ${({ theme: { color } }) => color.gray4};
      border: 0;
      border-radius: 1.6rem;

      ::placeholder {
        color: ${({ theme: { color } }) => color.black};
      }
    }
  }

  p.login-error {
    margin: 0.4rem;
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({ theme: { color } }) => color.redPint};
  }

  button {
    margin-top: 1rem;
  }

  .to-signup {
    margin-top: 3rem;
    font-size: 1.6rem;
    font-weight: 700;
  }
`;

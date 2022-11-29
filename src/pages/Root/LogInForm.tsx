import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import LogoWithTitle from '../../assets/LogoWithTitle';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';

interface LogInType {
  id: string;
  pw: string;
}

function LogInForm() {
  const { register, handleSubmit } = useForm<LogInType>();

  const onSubmit: SubmitHandler<LogInType> = (data) => {
    console.log('LogIn', data);
  };

  return (
    <StyledLogInForm onSubmit={handleSubmit(onSubmit)}>
      <LogoWithTitle width={200} />
      <Input
        name="id"
        plHolder="아이디(이메일)"
        register={register}
        options={{
          required: '아이디를 입력해주세요',
          pattern: {
            value: /\w{2,}@[A-Za-z]{2,}.[A-Za-z]{1,}/,
            message: 'error message',
          },
        }}
      />
      <Input
        name="pw"
        plHolder="비밀번호"
        register={register}
        type="password"
      />
      <Button type="submit" btnTheme="main">
        시작하기
      </Button>
    </StyledLogInForm>
  );
}

export default LogInForm;

const StyledLogInForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 10vh;
  flex-direction: column;

  .input-container {
    width: 80vw;
    max-width: 50rem;
    min-width: 30rem;

    margin-top: 1.2rem;

    + .input-container {
      margin-bottom: 3rem;
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

  svg + .input-container {
    margin-top: 7.2rem;
  }
`;

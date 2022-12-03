import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../../data/regExp';
import { StyledSignUpForm as Form } from './SignUp.style';

interface SignUpStartType {
  id: string;
  pw: string;
  pwCheck: string;
}

function SignUpStart() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpStartType>();

  const onSubmit: SubmitHandler<SignUpStartType> = (data) => {
    console.log(data);
  };

  return (
    <StyledSignUpStart>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>개더링 가입하기</h1>
        <div className="email-area">
          <Input
            name="id"
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
          name="pw"
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
          name="pwCheck"
          type="password"
          register={register}
          plHolder="비밀번호 확인"
          options={{
            required: '비밀번호를 한 번 더 입력해주세요',
            pattern: {
              value: PASSWORD_REGEX,
              message:
                '올바른 비밀번호 형식이 아닙니다(특수문자 포함 8자리 이상 16자리 이하)',
            },
          }}
        />
        {errors.id && <p className="signin-error">{errors.id.message}</p>}
        {errors.pw && <p className="signin-error">{errors.pw.message}</p>}
        <Button type="submit" btnTheme="sub" className="submit-btn">
          다음
        </Button>
      </Form>
    </StyledSignUpStart>
  );
}

export default SignUpStart;

const StyledSignUpStart = styled.div`
  .email-area {
    display: flex;
    align-items: flex-end;

    .input-container {
      flex: 1;
    }

    button {
      flex-shrink: 0;
      margin-left: 2rem;
    }

    & + .input-container + .input-container {
      margin-top: 1rem;
    }
  }
`;

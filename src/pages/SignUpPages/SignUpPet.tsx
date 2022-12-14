import { useState } from 'react';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import SelectInput from '../../components/Form/SelectInput';
import PetPicture from '../../components/SignUp/PetPicture';
import { SignUpForm } from '../../components/SignUp/SignUp.type';
import { useSignUpForm } from '../SignUp';

function SignUpPet() {
  const {
    register,
    formState: { errors, isValid },
  } = useSignUpForm();

  const [hasPicture, setHasPicture] = useState(false);

  return (
    <div>
      <h1>반려동물 등록</h1>
      <PetPicture setHasPicture={setHasPicture} />
      <Input
        name="petName"
        register={register}
        label="이름"
        plHolder="8자 이하"
        options={{
          required: '이름을 입력해주세요',
          maxLength: {
            value: 8,
            message: '이름은 8자 이하로 입력해주세요',
          },
        }}
      />
      <Input
        name="petBirth"
        register={register}
        label="반려동물 생일"
        type="date"
        options={{
          required: '생일을 입력해주세요',
          valueAsDate: true,
          min: {
            value: Date.parse('1990-01-01'),
            message: '생일이 잘못되었습니다',
          },
          max: {
            value: Date.now(),
            message: '생일이 잘못되었습니다',
          },
        }}
      />
      <div className="signup-row">
        <Input
          name="breed"
          register={register}
          label="견종"
          plHolder="견종을 알려주세요"
          options={{
            required: '견종을 입력해주세요',
            value: '시고르자브종',
            maxLength: {
              value: 10,
              message: '견종은 10자 이하로 입력해주세요',
            },
          }}
        />
        <Input
          name="weight"
          register={register}
          type="number"
          label="몸무게"
          plHolder="숫자만 입력해주세요"
          required={true}
          options={{
            required: '몸무게를 입력해주세요',
            valueAsNumber: true,
            max: {
              value: 200,
              message: '몸무게가 잘못되었습니다',
            },
          }}
        />
      </div>
      <Input
        name="description"
        register={register}
        label="소개"
        plHolder="100자 이하"
        options={{
          required: '소개를 입력해주세요',
          maxLength: {
            value: 100,
            message: '소개를 100자 이하로 입력해주세요',
          },
        }}
      />
      <div className="signup-row">
        <SelectInput<SignUpForm, SignUpForm['petGender']>
          name="petGender"
          label="성별"
          register={register}
          values={['FEMALE', 'MALE']}
          valueLabels={['여아', '남아']}
          options={{
            required: '성별을 입력해주세요',
          }}
        />
        <SelectInput<SignUpForm, SignUpForm['isNeutered']>
          name="isNeutered"
          label="중성화 여부"
          register={register}
          values={[true, false]}
          valueLabels={['했음', '안 했음']}
          options={{ required: '중성화 여부를 입력해주세요' }}
        />
      </div>

      {errors.petName && (
        <p className="signup-error">{errors.petName.message}</p>
      )}
      {errors.petBirth && (
        <p className="signup-error">{errors.petBirth.message}</p>
      )}
      {errors.breed && <p className="signup-error">{errors.breed.message}</p>}
      {errors.weight && <p className="signup-error">{errors.weight.message}</p>}
      {errors.description && (
        <p className="signup-error">{errors.description.message}</p>
      )}
      {errors.petGender && (
        <p className="signup-error">{errors.petGender.message}</p>
      )}
      {errors.isNeutered && (
        <p className="signup-error">{errors.isNeutered.message}</p>
      )}

      <Button
        type="submit"
        className="submit-btn"
        disabled={!isValid || !hasPicture}
      >
        {isValid && hasPicture ? '다음' : '모든 항목을 입력해주세요'}
      </Button>
    </div>
  );
}

export default SignUpPet;

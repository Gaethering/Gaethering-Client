import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

type InputProp<T extends FieldValues> = {
  label?: string | undefined;
  plHolder?: string | undefined;
  name: Path<T>;
  register: UseFormRegister<T>;
};

function Input<T extends FieldValues>({
  label,
  plHolder,
  name,
  register,
}: InputProp<T>) {
  return (
    <StyledInput className="input-container">
      {label && <label>{label}</label>}
      <input {...register(name)} placeholder={plHolder} />
    </StyledInput>
  );
}

export default Input;

const StyledInput = styled.div`
  label {
    font-size: 2.4rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  input {
    box-sizing: border-box;
    padding-left: 1rem;
    font-size: 2.4rem;
    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray2};

    ::placeholder {
      color: ${({ theme }) => theme.color.gray2};
    }
  }
`;

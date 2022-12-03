import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';
import styled from 'styled-components';

type SelectInputProp<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  values: string[];
  register: UseFormRegister<T>;
  options?: RegisterOptions<T, Path<T>>;
};

function SelectInput<T extends FieldValues>({
  name,
  values,
  label,
  register,
  options,
}: SelectInputProp<T>) {
  return (
    <StyledSelectInput className="input-container">
      <div className="label">{label}</div>
      <div className="values">
        {values.map((value) => (
          <label key={value}>
            <input
              type={'radio'}
              {...register(name, options)}
              autoComplete="off"
              value={value}
            />
            <SelectButton className="select-button">{value}</SelectButton>
          </label>
        ))}
      </div>
    </StyledSelectInput>
  );
}

export default SelectInput;

const SelectButton = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4rem;

  font-size: 2rem;
  font-weight: 500;

  color: ${({ theme: { color } }) => color.main};
  background-color: ${({ theme: { color } }) => color.white};

  border: 1.5px solid ${({ theme: { color } }) => color.main};
  border-radius: 1.6rem;

  transition: all 0.2s ease-in-out;

  :hover {
    background-color: ${({ theme: { color } }) => color.main + '22'};
    background-blend-mode: hue;
  }
`;

const StyledSelectInput = styled.div`
  .values {
    display: flex;
    width: 100%;

    label {
      display: flex;
      align-items: center;
      width: 100%;
    }

    input {
      display: none;

      &:checked + div {
        color: ${({ theme: { color } }) => color.white};
        background-color: ${({ theme: { color } }) => color.main};
        font-weight: 800;
      }
    }
  }

  ${SelectButton} {
    margin-right: 1rem;
  }
`;

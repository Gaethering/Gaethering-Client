import { HTMLInputTypeAttribute } from 'react';
import {
  FieldPath,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';
import StyledInput from './Input.style';

type InputProp<T extends FieldValues> = {
  type?: HTMLInputTypeAttribute | undefined;
  required?: boolean | undefined;
  label?: string | undefined;
  plHolder?: string | undefined;
  name: FieldPath<T>;
  register: UseFormRegister<T>;
  options?: RegisterOptions<T, FieldPath<T>>;
};

function Input<T extends FieldValues>({
  label,
  plHolder,
  name,
  type = 'text',
  required,
  register,
  options,
}: InputProp<T>) {
  return (
    <StyledInput className="input-container">
      <label>
        {label && <div className="label">{label}</div>}
        <input
          {...register(name, options)}
          placeholder={plHolder}
          required={required}
          autoComplete="off"
          type={type}
        />
      </label>
    </StyledInput>
  );
}

export default Input;

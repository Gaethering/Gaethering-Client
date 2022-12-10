import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';
import StyledInput from './Input.style';

type InputProp<T extends FieldValues> = {
  label?: string | undefined;
  plHolder?: string | undefined;
  name: Path<T>;
  type?: string;
  register: UseFormRegister<T>;
  options?: RegisterOptions<T, Path<T>>;
};

function Input<T extends FieldValues>({
  label,
  plHolder,
  name,
  type = 'text',
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
          autoComplete="off"
          type={type}
        />
      </label>
    </StyledInput>
  );
}

export default Input;

import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';
import { SelectButton, StyledSelectInput } from './SelectInput.style';

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

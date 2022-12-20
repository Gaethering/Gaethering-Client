import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';
import { SelectButton, StyledSelectInput } from './SelectInput.style';

type SelectInputProp<T extends FieldValues, UValueType = string> = {
  name: Path<T>;
  label: string;
  values: UValueType[];
  valueLabels: string[];
  register: UseFormRegister<T>;
  options?: RegisterOptions<T, Path<T>>;
};

function SelectInput<T extends FieldValues, UValueType = string>({
  name,
  values,
  label,
  valueLabels,
  register,
  options,
}: SelectInputProp<T, UValueType>) {
  return (
    <StyledSelectInput className="input-container">
      <div className="label">{label}</div>
      <div className="values">
        {values.map((value, index) => (
          <label key={(value as string).toString()}>
            <input
              type={'radio'}
              {...register(name, options)}
              autoComplete="off"
              value={value as string}
            />
            <SelectButton className="select-button">
              {valueLabels[index]}
            </SelectButton>
          </label>
        ))}
      </div>
    </StyledSelectInput>
  );
}

export default SelectInput;

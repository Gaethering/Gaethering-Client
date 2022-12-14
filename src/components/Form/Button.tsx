import { MouseEventHandler, ReactNode } from 'react';
import StyledButton from './Button.style';

type ButtonProp = {
  btnTheme: 'main' | 'sub';
  type: 'button' | 'submit';
  children: ReactNode;
  onClick?: MouseEventHandler;
  className?: string;
  disabled?: boolean;
};

function Button({
  btnTheme,
  type = 'button',
  children,
  className,
  onClick,
  disabled,
}: ButtonProp) {
  return (
    <StyledButton
      disabled={disabled}
      btnTheme={btnTheme}
      type={type}
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

export default Button;

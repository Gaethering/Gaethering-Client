import { MouseEventHandler, ReactNode } from 'react';
import StyledButton from './Button.style';

type ButtonProp = {
  btnTheme: 'main' | 'sub';
  type: 'button' | 'submit';
  children: ReactNode;
  onClick?: MouseEventHandler;
  className?: string;
};

function Button({
  btnTheme,
  type = 'button',
  children,
  className,
  onClick,
}: ButtonProp) {
  return (
    <StyledButton
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

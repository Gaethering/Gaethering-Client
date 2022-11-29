import { ReactNode } from 'react';
import styled from 'styled-components';

type ButtonProp = {
  btnTheme: 'main' | 'sub';
  type: 'button' | 'submit';
  children: ReactNode;
  className: string;
};

function Button({
  btnTheme,
  type = 'button',
  children,
  className,
}: ButtonProp) {
  return (
    <StyledButton btnTheme={btnTheme} type={type} className={className}>
      {children}
    </StyledButton>
  );
}

export default Button;

interface StyledButtonProp {
  btnTheme: 'main' | 'sub';
}

const StyledButton = styled.button<StyledButtonProp>`
  padding: 1.6rem auto;
  font-size: 2.4rem;
  font-weight: ${({ btnTheme }) => (btnTheme === 'main' ? '700' : '600')};
  color: ${({ btnTheme, theme: { color } }) =>
    btnTheme === 'main' ? color.white : color.black};
`;

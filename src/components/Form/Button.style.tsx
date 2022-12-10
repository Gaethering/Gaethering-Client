import styled from 'styled-components';

interface StyledButtonProp {
  btnTheme: 'main' | 'sub';
}

const StyledButton = styled.button<StyledButtonProp>`
  box-sizing: content-box;
  height: 2.4rem;
  padding: 1rem 2.4rem;
  font-size: 2rem;
  font-weight: ${({ btnTheme }) => (btnTheme === 'main' ? '700' : '600')};
  color: ${({ btnTheme, theme: { color } }) =>
    btnTheme === 'main' ? color.white : color.black};

  border-radius: 1.6rem;
  background-color: ${({ btnTheme, theme: { color } }) =>
    btnTheme === 'main' ? color.main : color.gray3};

  transition: all 0.1s ease-in-out;

  &:hover {
    box-shadow: 0 0.4rem 1rem 0 rgba(0, 0, 0, 0.1);
    transform: scale(1.01);
  }
`;

export default StyledButton;

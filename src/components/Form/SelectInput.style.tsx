import styled from 'styled-components';

export const SelectButton = styled.div`
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

export const StyledSelectInput = styled.div`
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

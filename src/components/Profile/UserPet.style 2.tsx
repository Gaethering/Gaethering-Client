import styled, { css } from 'styled-components';
import main from '../../themes/theme';

interface StyledUserPetProp {
  isDelegate: boolean;
}

const StyledUserPet = styled.div<StyledUserPetProp>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  width: 10rem;
  font-size: 1.5rem;
  font-weight: 700;

  ${({ isDelegate }) =>
    isDelegate &&
    css`
      .container {
        border-radius: 50%;
        border: 3px solid;
        border-color: ${main.color.main};
      }
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: 60%;
        left: 78%;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background-color: ${main.color.main};
        z-index: 1;
      }
      &::after {
        content: '✓';
        position: absolute;
        top: 63%;
        left: 81%;
        width: 2rem;
        height: 2rem;
        color: ${main.color.white};
        transform: rotate(5deg);
        z-index: 2;
      }
    `}
`;

export default StyledUserPet;

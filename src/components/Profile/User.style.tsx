import styled, { css } from 'styled-components';
import main from '../../themes/theme';

export const StyledUser = styled.div`
  width: 80vw;
  min-width: 390px;
  margin: 0 auto;
`

export const UserPetListStyle = styled.div`
  margin: 10rem 2rem 0;
  display: flex;
  flex-direction: column;
  
  .pet_list {
    margin-top: 2rem;
    display: flex;
    gap: 2rem;
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .link {
    button {
      font-size: 1.5rem;
      padding: 0.5rem 0.7rem;
      border-radius: 1.2rem;
    }
  }
`

interface StyledUserPetProp {
  representative: boolean;
}

export const StyledUserPet = styled.div<StyledUserPetProp>`
  .link {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    width: 10rem;
    font-size: 1.5rem;
    font-weight: 700;
  }

  ${({ representative }) =>
    representative &&
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
        top: 59%;
        left: 81%;
        width: 2rem;
        height: 2rem;
        color: ${main.color.white};
        transform: rotate(5deg);
        z-index: 2;
      }
    `}
`;

export const StyledUserProfile = styled.div`
  * {
    box-sizing: border-box;
  }
  margin: 10vh 2rem 0;
  display: flex;
  flex-direction: column;

  .user_profile_container {
    position: relative;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;

    .user_img {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;

      min-width: 3rem;
      min-height: 3rem;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }

    .user_profile_detail {
      display: flex;
      flex-direction: column;
      gap: 1.3rem;
      font-weight: 700;
      margin-left: 2%;

      .user_info {
        display: flex;
        align-items: center;
        gap: 1rem;

        .user_name {
          font-size: 3rem;
        }
      }

      .user_temp {
        color: ${(prop) => prop.theme.color.main};
        font-size: 1.7rem;
      }
    }
  }

  .button_container {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin: 3rem 0;
    a {
      display: inline-flex;
      text-decoration: none;
      margin: 0;
      padding: 0;
      width: 48%;
      min-width: 140px;
    }
    button {
      box-sizing: content-box;
      padding: 0.8rem;
      font-size: 1.7rem;
      width: 100%;
    }
  }
`;
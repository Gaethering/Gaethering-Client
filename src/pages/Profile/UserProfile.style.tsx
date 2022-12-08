import styled from 'styled-components';

const StyledUserProfile = styled.div`
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

        .user_local {
          font-size: 1.7rem;
          color: ${(prop) => prop.theme.color.gray2};
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
    .go_my_article,
    .edit_profile {
      width: 45%;
      min-width: 140px;
      font-size: 1.7rem;
    }
  }
`;

export default StyledUserProfile;

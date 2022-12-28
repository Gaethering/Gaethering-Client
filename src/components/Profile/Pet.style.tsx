import styled from 'styled-components';

export const StyledPet = styled.div`
  width: 80vw;
  min-width: 390px;
  margin: 0 auto;

  h1 {
    margin: 7vh 2rem -2vh;
  }

  .title_section {
    margin: 10vh 2rem 0;
    display: flex;
    align-items: center;

    .name_section {
      display: flex;
      flex-direction: column;
      margin-left: 2rem;
      gap: 2rem;
      p {
        font-size: 2.5rem;
        font-weight: 700;
      }

      .btn_edit_profile {
        font-size: 1.5rem;
        width: 20rem;
        padding: 0.5rem;
      }
    }
  }
`;

export const StyledPetProfile = styled.div`
  *:not(button) {
    box-sizing: border-box;
  }
  margin: 5rem 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h3 {
    font-size: 1.8rem;
    font-weight: 700;
  }

  p {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .age {
    display: flex;
    justify-content: space-between;
    width: 50%;
    padding-right: 1.5rem;
  }

  .breed_weight_section {
    display: flex;
    gap: 3rem;
    div {
      width: 50%;
      display: flex;
      justify-content: space-between;
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    p {
      border-bottom: 1px solid;
      border-color: ${(prop) => prop.theme.color.gray2};
      padding-bottom: 0.7rem;
    }
  }

  .gender_isNeutered_section {
    display: flex;
    gap: 3rem;
    div {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    button {
      font-size: 1.5rem;
      padding: 0.5rem;
    }
  }
`;

export const StyledEditForm = styled.div`
  *:not(button) {
    box-sizing: border-box;
  }

  .label {
    font-size: 1.8rem;
    font-weight: 700;
  }

  .title_section {
    display: flex;

    .name_input {
      display: flex;
      flex-direction: column;
      margin-left: 2rem;
      gap: 2rem;

      label {
        display: flex;
        input {
          font-size: 2.5rem;
          font-weight: 700;
        }
      }

      .button_section {
        display: flex;
        gap: 1rem;
        .btn_cancel,
        .btn_save {
          font-size: 1.5rem;
          width: 49%;
          padding: 0.5rem;
        }
      }
    }
  }

  .profile_section {
    margin: 5rem 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .input_row {
      label {
        display: flex;
      }
      .label {
        width: 4.7rem;
      }
    }

    .weight_input {
      .label {
        width: 8rem;
      }
    }

    .one_row {
      display: flex;
      justify-content: space-between;
      .select,
      .input_row {
        width: 48%;
      }
      .values {
        display: flex;
        justify-content: space-between;
        gap: 0.5rem;
      }
      .select-button {
        margin: 0;
        font-size: 1.5rem;
        padding: 0.5rem;
      }
    }

    .column {
      .input-container,
      label {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }
    }
  }

  .buttons {
      margin: 3rem 2rem;
      display: flex;
      gap: 1rem;
      .btn_cancel,
      .btn_save {
        font-size: 1.5rem;
        width: 49%;
        padding: 0.5rem;
      }
    }
`;

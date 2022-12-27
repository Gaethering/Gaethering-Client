import styled from 'styled-components';
import StyledButton from '../Form/Button.style';

const EditerOverlay = styled.div`
  position: fixed;
  top: ${({ theme: { size } }) => size.navHeight};
  right: 10vw;

  width: 80vw;
  height: 100%;
  background-color: ${({ theme: { color } }) => color.white};

  overflow-y: scroll;

  z-index: 100;
`;

const StyledPostEditer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 4rem 1rem;
  padding: 2rem;

  border-radius: 1.6rem;
  background-color: ${({ theme: { color } }) => color.white};
  box-shadow: 0 0 1rem 0 rgba(100, 100, 100, 0.16);

  input,
  textarea {
    color: ${({ theme: { color } }) => color.black};
  }
`;

const TitleInput = styled.input`
  outline: none;

  height: 3rem;
  margin-bottom: 0.6rem;

  padding: 0.6rem 1.04rem;

  border-bottom: 0.1rem solid ${({ theme: { color } }) => color.gray2};

  font-size: 1.8rem;
  font-weight: 500;
`;

const ContentsInput = styled.textarea`
  resize: none;
  outline: none;

  height: 50vh;
  padding: 1rem;

  border: none;

  font-size: 1.6rem;
  font-weight: 400;
`;

const Error = styled.p`
  color: ${({ theme: { color } }) => color.redPoint};
  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;
  width: 100%;
`;

const ButtonSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-top: 2rem;
  margin-bottom: 4rem;
`;

const Submit = styled(StyledButton)`
  flex: 1;
  font-size: 1.8rem;
`;

const CencelButton = styled(StyledButton)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  width: 10rem;
  height: 4.4rem;
  border-radius: 1.6rem;

  font-size: 1.8rem;
  font-weight: 400;
`;

export {
  ContentsInput,
  EditerOverlay,
  StyledPostEditer,
  Submit,
  TitleInput,
  Error,
  CencelButton,
  ButtonSection,
};

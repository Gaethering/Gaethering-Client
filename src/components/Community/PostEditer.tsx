import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import { postArticle } from '../../api/boardAPI';
import { PostArticleRequest } from '../../api/boardAPI.type';
import StyledButton from '../Form/Button.style';

function PostEditer() {
  const {
    handleSubmit,
    setValue,
    formState: { errors, isLoading, isSubmitting },
    register,
  } = useForm<PostArticleRequest>();
  const onSubmit: SubmitHandler<PostArticleRequest> = async (data) => {
    console.log(data);
    setValue('category', 'qna');

    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const formData = new FormData();
    formData.append('data', blob);

    const res = await postArticle(formData);
    console.log('res', res);
  };
  return (
    <EditerOverlay>
      <StyledPostEditer onSubmit={handleSubmit(onSubmit)}>
        <TitleInput {...register('title')} />
        <ContentsInput {...register('contents')} />
        <Submit type="submit" btnTheme="main">
          작성 완료{isSubmitting && isLoading && <span>{'Loading...'}</span>}
        </Submit>
      </StyledPostEditer>
    </EditerOverlay>
  );
}

export default PostEditer;

const EditerOverlay = styled.div`
  position: fixed;
  width: 80vw;
  height: 100%;
  background-color: ${({ theme: { color } }) => color.white};

  z-index: 1000;
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

  height: 60vh;
  padding: 1rem;

  border: none;

  font-size: 1.6rem;
  font-weight: 400;
`;

const Submit = styled(StyledButton)`
  margin-top: 2rem;
  font-size: 1.8rem;
`;

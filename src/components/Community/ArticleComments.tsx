import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { PostCommentRequest } from '../../api/boardAPI.type';
import Button from '../Form/Button';

function ArticleComments() {
  const { postId } = useParams<'postId'>();
  const {
    register,
    formState: { errors, isSubmitSuccessful, isValid },
    handleSubmit,
  } = useForm<PostCommentRequest>();

  const onSubmit: SubmitHandler<PostCommentRequest> = (data) => {
    data;
  };

  return (
    <Wrapper>
      <CommentForm onSubmit={handleSubmit(onSubmit)}>
        <CommentInput {...register('content', { required: true })} />
        <SubmitButton>작성</SubmitButton>
      </CommentForm>
      <CommentsBox>{
          
        }</CommentsBox>
    </Wrapper>
  );
}

export default ArticleComments;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #000;
`;

const CommentForm = styled.form`
  display: flex;
  gap: 1rem;
  padding: 2rem 1rem;
`;

const CommentInput = styled.input`
  flex: 1;

  height: 3rem;
  padding: 0;

  background-color: ${({ theme: { color } }) => color.gray3};
  border-radius: 0.8rem;
`;

const SubmitButton = styled(Button)`
  padding: 0;
  width: 5rem;
  height: 3rem;

  border-radius: 0.8rem;

  font-size: 1.6rem;
`;

const CommentsBox = styled.div`
  margin: 1rem;
`;

import { SubmitHandler, useForm } from 'react-hook-form';
import { useInfiniteQuery, useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getComments, postComment } from '../../api/boardAPI';
import { BoardApiUrl, PostCommentRequest } from '../../api/boardAPI.type';
import { QueryKeys } from '../../api/QueryKeys';
import Button from '../Form/Button';
import StyledButton from '../Form/Button.style';
import Comment from './Comment';

function ArticleComments() {
  const queryClient = useQueryClient();
  const { postId } = useParams<'postId'>();
  const {
    register,
    formState: { isSubmitSuccessful, isValid },
    handleSubmit,
    reset,
  } = useForm<PostCommentRequest>();

  const fetch = ({ pageParam }: { pageParam?: number }) =>
    getComments(postId ?? '', 5, pageParam);

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    [...QueryKeys.ArticleComments, postId],
    fetch,
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );

  const onSubmit: SubmitHandler<PostCommentRequest> = async (data) => {
    const res = await postComment(postId ?? '', data.content);

    console.log('POST', res, isSubmitSuccessful);

    res &&
      queryClient.invalidateQueries([...QueryKeys.ArticleComments, postId]);
    reset();
  };

  return (
    <Wrapper>
      <CommentCount>댓글: {data?.pages[0].totalCommentsCnt} 개</CommentCount>
      <CommentForm onSubmit={handleSubmit(onSubmit)}>
        <CommentInput
          autoComplete="off"
          {...register('content', { required: true })}
        />
        <SubmitButton type="submit" disabled={!isValid}>
          작성
        </SubmitButton>
      </CommentForm>
      <CommentsBox>
        {data?.pages.map((page) =>
          page?.comments.map((comment) => (
            <Comment {...comment} key={comment.commentId} />
          ))
        )}
      </CommentsBox>
      {hasNextPage && (
        <More btnTheme="sub" type="button" onClick={() => fetchNextPage()}>
          댓글 더보기
        </More>
      )}
    </Wrapper>
  );
}

export default ArticleComments;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem 1rem;
`;

const CommentForm = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CommentInput = styled.input`
  flex: 1;

  height: 3rem;
  padding: 0.2rem 1rem;

  background-color: ${({ theme: { color } }) => color.gray3};
  border-radius: 0.8rem;
`;

const SubmitButton = styled(Button)`
  padding: 0;
  width: 5.4rem;
  height: 3.4rem;

  border-radius: 0.8rem;

  font-size: 1.6rem;
`;

const CommentCount = styled.p`
  margin-left: 0.2rem;
  margin-bottom: 0.6rem;

  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme: { color } }) => color.gray2};
`;

const CommentsBox = styled.ul`
  margin: 1rem 0.2rem;
  margin-bottom: 0;
`;

const More = styled(StyledButton)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.6rem;
  padding: 0;

  background-color: ${({ theme: { color } }) => color.gray4};
  border-radius: 0.8rem;

  font-size: 1.4rem;
`;

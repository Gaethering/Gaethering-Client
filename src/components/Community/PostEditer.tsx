import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from 'react-query';
import { postInfoArticle, postQnaArticle } from '../../api/boardAPI';
import {
  PostArticleRequest,
  PostArticleResponse,
} from '../../api/boardAPI.type';
import showAxiosError from '../../api/showAxiosError';
import { useCategory } from '../../pages/Community';
import PicturesInput from './PicturesInput';
import * as S from './PostEditer.style';

function PostEditer() {
  useEffect(() => {
    //! Mock API
    import('../../mocks/browser').then((msw) => {
      msw.worker.context.isMockingEnabled && msw.worker.stop();
    });
    ////
  }, []);

  const {
    handleSubmit,
    formState: { errors, isValid },
    register,
  } = useForm<PostArticleRequest>({ mode: 'all' });

  const [images, setImages] = useState<File[]>([]);
  const { category } = useCategory();

  const post = category === 'qna' ? postQnaArticle : postInfoArticle;

  const { mutate, isLoading } = useMutation<
    PostArticleResponse,
    AxiosError,
    FormData
  >(post, {
    retry: 3,
    retryDelay: 500,
    onSuccess: (data) => {
      alert('작성 완료!');

      //! TEST
      console.log('게시글 작성 완료!', data);
      ////TEST
    },
    onError: (error) => showAxiosError(error),
  });

  const onSubmit: SubmitHandler<PostArticleRequest> = async (data) => {
    const formData = new FormData();
    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: 'application/json' });

    images[0] ?? formData.append('images', new Blob());
    images.forEach((img) => formData.append('images', img));

    formData.append('data', blob);

    //! TEST
    console.log(data);
    console.log(
      'data',
      formData.get('data'),
      'images',
      formData.getAll('images')
    );
    ////TEST

    mutate(formData);
  };
  return (
    <S.EditerOverlay>
      <S.StyledPostEditer onSubmit={handleSubmit(onSubmit)}>
        <S.TitleInput
          {...register('title', {
            required: '제목을 입력해주세요',
            disabled: isLoading,
          })}
          placeholder="제목을 입력해주세요"
        />
        <S.ContentsInput
          {...register('content', {
            required: '내용을 입력해주세요',
            disabled: isLoading,
          })}
          placeholder="내용을 입력해주세요"
        />
        <PicturesInput
          images={images}
          setImages={setImages}
          disabled={isLoading}
        />
        <S.Error>{errors.title?.message}</S.Error>
        <S.Error>{errors.content?.message}</S.Error>
        <S.ButtonSection>
          <S.Submit
            type="submit"
            btnTheme="main"
            disabled={!isValid || isLoading}
          >
            작성 완료
          </S.Submit>
          <S.CancleButton
            type="button"
            btnTheme="sub"
            disabled={!isValid || isLoading}
          >
            <span>+</span>
          </S.CancleButton>
        </S.ButtonSection>
      </S.StyledPostEditer>
    </S.EditerOverlay>
  );
}

export default PostEditer;

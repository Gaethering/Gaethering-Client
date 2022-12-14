import { AxiosError } from 'axios';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { postInfoArticle, postQnaArticle } from '../../api/boardAPI';
import {
  PostArticleRequest,
  PostArticleResponse,
} from '../../api/boardAPI.type';
import { QueryKeys } from '../../api/QueryKeys';
import showAxiosError from '../../api/showAxiosError';
import { useCategory } from '../../pages/Community';
import PicturesInput from './PicturesInput';
import * as S from './PostEditer.style';

function PostEditer() {
  const {
    handleSubmit,
    formState: { errors, isValid },
    reset,
    register,
  } = useForm<PostArticleRequest>({ mode: 'all' });

  const [images, setImages] = useState<File[]>([]);
  const { category } = useCategory();

  const post = category === 'qna' ? postQnaArticle : postInfoArticle;
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation<
    PostArticleResponse,
    AxiosError,
    FormData
  >(post, {
    retry: 3,
    retryDelay: 500,
    onSuccess: (data) => {
      //! TEST
      console.log('게시글 작성 완료!', data);
      ////TEST
      alert('작성 완료!');

      queryClient.invalidateQueries([...QueryKeys.ArticleList, category]);

      reset();
      setImages([]);
      navigate('../');
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

  const navigate = useNavigate();

  const onCencel = () => {
    const isConfirm = confirm('작성을 취소하시겠습니까?');
    if (!isConfirm) {
      return;
    }

    reset();
    setImages([]);
    navigate('../');
  };

  return (
    <S.EditerOverlay>
      <S.StyledPostEditer onSubmit={handleSubmit(onSubmit)}>
        <S.TitleInput
          {...register('title', {
            required: '제목을 입력해주세요',
            maxLength: {
              value: 30,
              message: '제목은 30자 이하로 작성해주세요',
            },
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
          <S.CencelButton type="button" btnTheme="sub" onClick={onCencel}>
            작성 취소
          </S.CencelButton>
        </S.ButtonSection>
      </S.StyledPostEditer>
    </S.EditerOverlay>
  );
}

export default PostEditer;

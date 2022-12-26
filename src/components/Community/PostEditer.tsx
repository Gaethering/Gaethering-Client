import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from 'react-query';
import { postArticle } from '../../api/boardAPI';
import { PostArticleRequest } from '../../api/boardAPI.type';
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
    setValue,
    formState: { errors },
    register,
  } = useForm<PostArticleRequest>();

  const [images, setImages] = useState<File[]>([]);
  const { category } = useCategory();

  const { mutate, isLoading } = useMutation(postArticle, {
    retry: 5,
    retryDelay: 1000,
    onSuccess: (data) => console.log(data),
  });

  const onSubmit: SubmitHandler<PostArticleRequest> = async (data) => {
    const formData = new FormData();

    // setValue('categoryId', category);
    setValue('categoryId', 1);
    console.log(data);

    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: 'application/json' });

    images[0] ?? formData.append('images', new Blob());
    images.forEach((img) => formData.append('images', img));

    formData.append('data', blob);

    console.log(
      'data',
      formData.get('data'),
      'images',
      formData.getAll('images')
    );

    const res = mutate(formData);

    console.log('res', res);
  };
  return (
    <S.EditerOverlay>
      <S.StyledPostEditer onSubmit={handleSubmit(onSubmit)}>
        <S.TitleInput
          {...register('title')}
          placeholder="제목을 입력해주세요"
        />
        <S.ContentsInput
          {...register('content')}
          placeholder="내용을 입력해주세요"
        />
        <PicturesInput images={images} setImages={setImages} />
        <S.Submit type="submit" btnTheme="main">
          작성 완료 {isLoading && <span>{'Loading...'}</span>}
        </S.Submit>
      </S.StyledPostEditer>
    </S.EditerOverlay>
  );
}

export default PostEditer;

import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { CommunityType } from '../../api/boardAPI.type';
import StyledButton from '../Form/Button.style';

type Props = { category: CommunityType };

function PostEditer({ category }: Props) {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const onSubmit = () => console.log('');
  return (
    <StyledPostEditer onSubmit={handleSubmit(onSubmit)}>
      <TitleInput {...register} />
      <ContentsInput {...register} />
      <Submit type="submit" btnTheme="main">
        작성
      </Submit>
    </StyledPostEditer>
  );
}

export default PostEditer;

const StyledPostEditer = styled.form`
  display: flex;
  flex-direction: column;
`;
const TitleInput = styled.input`
  font-size: 1.8rem;
`;
const ContentsInput = styled.input`
  font-size: 1.6rem;
`;
const Submit = styled(StyledButton)`
  font-size: 1.6rem;
`;

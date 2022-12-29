import PetImage from './PetImage';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../Form/Button';
import Input from '../Form/Input';
import { StyledUser, StyledUserProfile } from './User.style';
import { Form, useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { patchProfile, getUserProfile } from '../../api/profileAPI';
import { QueryKeys } from '../../api/QueryKeys';

interface EditProfileType {
  nickname: string;
}

function EditProfile() {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(QueryKeys.userProfile, getUserProfile);
  const nameMutation = useMutation(patchProfile, {
    onSuccess: () => {
      queryClient.invalidateQueries(QueryKeys.user);
    },
  });
  console.log('pp', nameMutation);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<EditProfileType>();

  const onSubmit: SubmitHandler<EditProfileType> = (data) => {
    console.log('onsub', data);
    nameMutation.mutate(data);
    goBack();
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <StyledUser>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <StyledUserProfile>
          <div className="user_profile_container">
            {/* <PetImage src={petImg} name={userName} className="user_img" /> */}
            <div className="user_profile_detail">
              <div className="user_info">
                <Input
                  name="nickname"
                  register={register}
                  label="이름"
                  plHolder="실명을 입력해주세요"
                  options={{
                    required: '이름을 입력해주세요',
                    minLength: {
                      value: 2,
                      message: '이름은 2자 이상으로 입력해주세요',
                    },
                    maxLength: {
                      value: 8,
                      message: '이름은 8자 이하로 입력해주세요',
                    },
                  }}
                />
              </div>
            </div>
          </div>
          <div className="button_container">
            <Button
              btnTheme="sub"
              type="button"
              className="cancel"
              onClick={goBack}
            >
              취소
            </Button>
            <Button btnTheme="main" type="submit" className="save">
              저장
            </Button>
          </div>
        </StyledUserProfile>
      </Form>
    </StyledUser>
  );
}

export default EditProfile;

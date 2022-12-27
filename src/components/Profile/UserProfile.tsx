import { StyledUserProfile } from './User.style';
import Button from '../Form/Button';
import PetImage from './PetImage';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import UserName from './UserName';
import EditName from './EditName';
import { useMutation } from 'react-query';
import { patchProfile } from '../../api/profileAPI';
import { SubmitHandler, useForm } from 'react-hook-form';

interface UserProp {
  userName: string;
  petImg: string;
}
interface EditProfileType {
  nickname: string;
}


function UserProfile({ userName, petImg }: UserProp) {
  console.log('userName', userName);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<EditProfileType>();

  const nameMutation = useMutation(patchProfile);
  console.log('pp', nameMutation)
  
  const [nameInput, setNameInput] = useState(true);
  const handleChange = () => {
    console.log('change', nameInput);
    setNameInput(!nameInput);
  };
  const onSubmit: SubmitHandler<EditProfileType> = (nickname) => {
    console.log('submit', nickname);
    setNameInput(!nameInput)
    nameMutation.mutate(nickname);
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <StyledUserProfile onSubmit={handleSubmit(onSubmit)}>
      <div className="user_profile_container">
        <PetImage src={petImg} name={userName} className="user_img" />
        {/* <div className="user_profile_detail">
          <div className="user_info">
            <h2 className="user_name">{userName}</h2>
          </div>
        </div> */}
        {nameInput === true ? <UserName name={userName} /> : <EditName />}
        {/* // <UserName name={userName}/> */}
      </div>
      <div className="button_container">
        {nameInput === true ? (
          <Link to="/myBoard" className="link">
            <Button btnTheme="sub" type="button" className="go_my_article">
              내가 쓴 게시물
            </Button>
          </Link>
        ) : (
          <Button
            btnTheme="sub"
            type="button"
            className="cancel"
            onClick={handleChange}
          >
            취소
          </Button>
        )}
        {/* <Link to="edit" className="link"> */}
        {nameInput === true ? (
          <Button
            btnTheme="main"
            type="button"
            className="edit_profile"
            onClick={handleChange}
          >
            닉네임 수정
          </Button>
        ) : (
          <Button
            btnTheme="main"
            type="submit"
            className="save"
            // onClick={handleChange}
      >
            저장
          </Button>
        )}
        {/* </Link> */}
      </div>
    </StyledUserProfile>
  );
}

export default UserProfile;

import { StyledUserProfile } from './User.style';
import Button from '../Form/Button';
import PetImage from './PetImage';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { patchProfile } from '../../api/profileAPI';

interface UserProp {
  userName: string;
  petImg: string;
}
interface EditProfileType {
  nickname: string;
}

function UserProfile({ userName, petImg }: UserProp) {
  console.log('userName', userName);

  const nameMutation = useMutation(patchProfile);
  console.log('pp', nameMutation);

  const [nameState, setNameState] = useState('');
  const [nameInput, setNameInput] = useState(true);
  const handleChange = () => {
    console.log('change', nameInput);
    setNameInput(!nameInput);
  };

  useEffect(() => {
    setNameState(userName);
  });

  return (
    <StyledUserProfile>
      <div className="user_profile_container">
        <PetImage src={petImg} name={nameState} className="user_img" />
        <div className="user_profile_detail">
          <div className="user_info">
            <h2 className="user_name">{nameState}</h2>
          </div>
        </div>
      </div>
      <div className="button_container">
        <Link to="edit" className="link">
          <Button
            btnTheme="main"
            type="button"
            className="edit_profile"
            onClick={handleChange}
          >
            닉네임 수정
          </Button>
        </Link>
      </div>
    </StyledUserProfile>
  );
}

export default UserProfile;

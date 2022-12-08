import { StyledUserProfile } from './User.style';
import Button from '../../components/Form/Button';
import PetImage from './PetImage';

interface UserProp {
  userName: string;
  userLocal: string;
  userTemp: number;
  petImg: string;
}

function UserProfile({ userName, userLocal, userTemp, petImg }: UserProp) {
  return (
    <StyledUserProfile>
      <div className="user_profile_container">
        <PetImage src={petImg} id="pet" className="user_img" />
        <div className="user_profile_detail">
          <div className="user_info">
            <h2 className="user_name">{userName}</h2>
            <p className="user_local">{userLocal}</p>
          </div>
          <p className="user_temp">산책 매너 온도 {userTemp}℃</p>
        </div>
      </div>
      <div className="button_container">
        <Button btnTheme="sub" type="button" className="go_my_article">
          내가 쓴 게시물
        </Button>
        <Button btnTheme="main" type="button" className="edit_profile">
          프로필 수정
        </Button>
      </div>
    </StyledUserProfile>
  );
}

export default UserProfile;

import { StyledUserProfile } from './User.style';
import Button from '../Form/Button';
import PetImage from './PetImage';
import { Link } from 'react-router-dom';

interface UserProp {
  userName: string;
  userTemp: number;
  petImg: string;
}

function UserProfile({ userName, userTemp, petImg }: UserProp) {
  console.log('userName', userName);
  return (
    <StyledUserProfile>
      <div className="user_profile_container">
        <PetImage src={petImg} id="pet" className="user_img" />
        <div className="user_profile_detail">
          <div className="user_info">
            <h2 className="user_name">{userName}</h2>
          </div>
          <p className="user_temp">산책 매너 온도 {userTemp}℃</p>
        </div>
      </div>
      <div className="button_container">
        <Link to="/myBoard" className="link">
          <Button btnTheme="sub" type="button" className="go_my_article">
            내가 쓴 게시물
          </Button>
        </Link>
        <Link to="edit" className="link">
          <Button btnTheme="main" type="button" className="edit_profile">
            프로필 수정
          </Button>
        </Link>
      </div>
    </StyledUserProfile>
  );
}

export default UserProfile;

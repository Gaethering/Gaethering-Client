import { useState } from 'react';
import StyledNavProfile from './NavProfile.style';
import defaultImg from '/src/assets/defaultProfilePicture.svg';

export default function NavProfile() {
  const [profileImg, setProfileImg] = useState('');
  const [userName, setUserName] = useState('뽀삐');
  const [petName, setPetName] = useState('user1234');

  const imgUrl = profileImg ? profileImg : defaultImg;

  return (
    <StyledNavProfile className="nav-profile">
      <img src={imgUrl} className="pet-profile-img" alt="반려동물 프로필" />
      <div className="user-info">
        <span className="pet-name">{petName}</span>
        <span className="user-name">{userName}</span>
      </div>
    </StyledNavProfile>
  );
}

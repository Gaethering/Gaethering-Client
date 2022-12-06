import { useState } from 'react';
import styled from 'styled-components';
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

const StyledNavProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  img.pet-profile-img {
    width: 4rem;
    margin-right: 1rem;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    margin-right: 3rem;

    .pet-name {
      display: flex;
      align-items: center;
      height: 2rem;

      font-size: 1.8rem;
      font-weight: 700;
      color: ${({ theme: { color } }) => color.black};
    }

    .user-name {
      display: flex;
      align-items: center;
      height: 2rem;
      font-size: 1.4rem;
      font-weight: 500;
      color: ${({ theme: { color } }) => color.gray2};
    }
  }
`;

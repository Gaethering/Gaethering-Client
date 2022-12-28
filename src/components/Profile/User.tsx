import UserPetList from '../Profile/UserPetList';
import UserProfile from '../Profile/UserProfile';
import { StyledUser } from '../Profile/User.style';
import { useState } from 'react';
import PetImageDefault from '../../assets/PetImageDefault.svg';
import { ProfileResponse } from '../../api/profileAPI.typs';
import { getUserProfile } from '../../api/profileAPI';
import { useQuery } from 'react-query';

function User() {
  const userData = useQuery('@getUserProfile', getUserProfile);
  console.log('tt', userData.data);

  return (
    <StyledUser>
      <UserProfile
        userName={userData.data?.nickname}
        petImg={
          userData.data?.pets.filter((pet) => pet.representative === true)[0]
            .imageUrl
        }
      />
      <UserPetList petList={userData.data?.pets} />
    </StyledUser>
  );
}

export default User;

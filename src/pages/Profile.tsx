import Pet from '../components/Profile/Pet';
import EditPet from '../components/Profile/EditPet';
import UserPetList from '../components/Profile/UserPetList';
import UserProfile from '../components/Profile/UserProfile';
import { StyledUser } from '../components/Profile/User.style';
import { useState } from 'react';
import PetImageDefault from '../assets/PetImageDefault.svg';
import { ProfileResponse } from '../api/profileAPI.typs';
import { getUserProfile } from '../api/profileAPI';
import { useQuery } from 'react-query';
import { useEffect } from 'react';
import { useSetServiceName } from './Root';
import { QueryKeys } from '../api/QueryKeys';

function Profile() {
  const {data, isLoading} = useQuery(QueryKeys.userProfile, getUserProfile);
  console.log('tt', data);

  const setNav = useSetServiceName();

  useEffect(() => {
    setNav('프로필');
  }, [setNav]);

  return (
    <StyledUser>
      <UserProfile
        userName={data?.nickname}
        petImg={
          data?.pets.filter((pet) => pet.representative === true)[0]
            .imageUrl
        }
      />
      <UserPetList petList={data?.pets} />
    </StyledUser>
  );
}

export default Profile;
export { Pet, EditPet };

import PetImage from './PetImage';
import PetProfile from './PetProfile';
import { StyledPet } from './Pet.style';
import Button from '../Form/Button';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useEffect } from 'react';
import { useSetServiceName } from '../../pages/Root';
import { getPetProfile } from '../../api/profileAPI';
import { PetResponse } from '../../api/profileAPI.typs';

function Pet() {
  const { petID } = useParams();
  const petData = useQuery(['pets', petID], () => getPetProfile(petID));
  console.log('gg', petData.data);
  console.log('gg2', petData);

  // const setNav = useSetServiceName();

  // useEffect(() => {
  //   setNav('프로필');
  // }, [setNav]);

  //임시 데이터
  // const petData = {
  //   name: '해삐',
  //   age: 6,
  //   gender: '남아',
  //   breed: '말티즈',
  //   weight: 5.5,
  //   isNeutered: true,
  //   description: '말을 잘들어요',
  //   imageUrl:
  //     'https://images.pexels.com/photos/13215915/pexels-photo-13215915.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  // };

  return (
    <StyledPet>
      <div className="title_section">
        <PetImage
          src={petData.data?.imageUrl}
          name={petData.data?.name}
          className="pet_img"
        />
        <div className="name_section">
          <p className="pet_name">{petData.data?.name}</p>
          <Link to="editPet" className="link">
            <Button btnTheme="sub" type="button" className="btn_edit_profile">
              프로필 수정
            </Button>
          </Link>
        </div>
      </div>
      <PetProfile
        age={petData.data?.birth}
        gender={petData.data?.gender}
        breed={petData.data?.breed}
        weight={petData.data?.weight}
        isNeutered={petData.data?.isNeutered}
        description={petData.data?.description}
      />
    </StyledPet>
  );
}

export default Pet;

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
import { QueryKeys } from '../../api/QueryKeys';

function Pet() {
  const { petID } = useParams();
  const petData = useQuery([QueryKeys.petProfile, petID], () => getPetProfile(petID));
  console.log('gg', petData.data);
  console.log('gg2', petData);

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

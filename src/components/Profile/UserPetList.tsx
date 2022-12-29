import { Link } from 'react-router-dom';
import Button from '../Form/Button';
import { UserPetListStyle, Title } from './User.style';
import UserPet from './UserPet';

interface UserPetListProp {
  petList: {
    id: number;
    name: string;
    representative: boolean;
    imageUrl: string;
  }[];
}

function UserPetList({ petList }: UserPetListProp) {
  return (
    <UserPetListStyle>
      <Title>
        <h2>나의 반려동물</h2>
        <Link to="addPet" className="link">
          <Button btnTheme="main" type="button" className="add_pet">
            반려동물 추가
          </Button>
        </Link>
      </Title>
      <div className="pet_list">
        {petList &&
          petList.map((pet) => (
            <UserPet
              key={pet?.id}
              petID={pet?.id}
              name={pet?.name}
              src={pet?.imageUrl}
              className="pet_img"
              representative={pet?.representative}
            >
              {pet.name}
            </UserPet>
          ))}
      </div>
    </UserPetListStyle>
  );
}

export default UserPetList;

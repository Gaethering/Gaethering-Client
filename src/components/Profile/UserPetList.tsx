import { UserPetListStyle } from './User.style';
import UserPet from './UserPet';

interface UserPetListProp {
  petList: {
    name: string;
    isRepresentative: boolean;
    imageUrl: string;
  }[];
}

function UserPetList({ petList }: UserPetListProp) {
  return (
    <UserPetListStyle>
      <h2>나의 반려동물</h2>
      <div className="pet_list">
        {petList.map((pet) => (
          <UserPet
            key={pet.name}
            src={pet.imageUrl}
            id={pet.name}
            className="pet_img"
            isRepresentative={pet.isRepresentative}
          >
            {pet.name}
          </UserPet>
        ))}
      </div>
    </UserPetListStyle>
  );
}

export default UserPetList;

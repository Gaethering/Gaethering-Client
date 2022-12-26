import { UserPetListStyle } from './User.style';
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
      <h2>나의 반려동물</h2>
      <div className="pet_list">
        {petList && petList.map((pet) => (
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

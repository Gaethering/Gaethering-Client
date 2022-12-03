import UserPetListStyle from './UserPetList.style';
import UserPet from './UserPet';

interface UserPetListProp {
  petList: {
    name: string;
    isDelegate: boolean;
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
            isDelegate={pet.isDelegate}
          >
            {pet.name}
          </UserPet>
        ))}
      </div>
    </UserPetListStyle>
  );
}

export default UserPetList;

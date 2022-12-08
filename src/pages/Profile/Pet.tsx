import PetImage from './PetImage';
import PetProfile from './PetProfile';
import { StyledPet } from './Pet.style';
import Button from '../../components/Form/Button';
import { Link } from 'react-router-dom';

function Pet() {
  //임시 데이터
  const petData = {
    name: '해삐',
    age: 6,
    gender: '남아',
    breed: '말티즈',
    weight: 5.5,
    isNeutered: true,
    description: '말을 잘들어요',
    imageUrl:
      'https://images.pexels.com/photos/13215915/pexels-photo-13215915.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  };

  return (
    <StyledPet>
      <div className="title_section">
        <PetImage src={petData.imageUrl} id={petData.name} className="pet_img" />
        <div className="name_section">
          <p className="pet_name">{petData.name}</p>
          <Link to="/editPet" className='link'>
            <Button
              btnTheme="sub"
              type="button"
              className="btn_edit_profile"
            >
              프로필 수정
            </Button>
          </Link>
        </div>
      </div>
      <PetProfile age={petData.age} gender={petData.gender} breed={petData.breed} weight={petData.weight} isNeutered={petData.isNeutered} description={petData.description}/>
    </StyledPet>
  );
}

export default Pet;

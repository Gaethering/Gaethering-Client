import Button from '../Form/Button';
import { StyledPetProfile } from './Pet.style';

interface PetProfileProp {
  age?: string;
  gender?: string;
  breed?: string;
  weight?: number;
  isNeutered?: boolean;
  description?: string;
}

function PetProfile({ age, gender, breed, weight, isNeutered, description }: PetProfileProp) {
  return (
    <StyledPetProfile>
      <div className="age">
        <h3>생일</h3>
        <p>{age}</p>
      </div>
      <div className="breed_weight_section">
        <div className="breed">
          <h3>견종</h3>
          <p>{breed}</p>
        </div>
        <div className="weight">
          <h3>몸무게</h3>
          <p>{weight}kg</p>
        </div>
      </div>
      <div className="description">
        <h3>소개</h3>
        <p>{description}</p>
      </div>
      <div className="gender_isNeutered_section">
        <div className="gender">
          <h3>성별</h3>
          <Button btnTheme="main" type="button" className="btn_gender">
            {gender === 'FEMALE' ? '여아' : '남아'}
          </Button>
        </div>
        <div className="isNeutered">
          <h3>중성화 여부</h3>
          <Button btnTheme="main" type="button" className="btn_isNeutered">
            {isNeutered ? '완료' : '미완료'}
          </Button>
        </div>
      </div>
    </StyledPetProfile>
  );
}

export default PetProfile;

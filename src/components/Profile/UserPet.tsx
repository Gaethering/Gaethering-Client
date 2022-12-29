import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import PetImage from './PetImage';
import { StyledUserPet } from './User.style';

interface UserPetProp {
  children: ReactNode;
  src: string;
  petID: number;
  name: string;
  className: string;
  representative: boolean;
}

function UserPet({
  src,
  petID,
  name,
  className,
  representative,
  children,
}: UserPetProp) {
  return (
    <StyledUserPet representative={representative}>
      <Link to={`/profile/pet/${petID}`} className="link">
        <div className="container">
          <PetImage src={src} name={name} className={className} />
        </div>
        {children}
      </Link>
    </StyledUserPet>
  );
}

export default UserPet;

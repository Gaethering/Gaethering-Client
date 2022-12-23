import { Children, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import PetImage from './PetImage';
import { StyledUserPet } from './User.style';

interface UserPetProp {
  children: ReactNode;
  src: string;
  id: string;
  className: string;
  isRepresentative: boolean;
}

function UserPet({ src, id, className, isRepresentative, children }: UserPetProp) {
  return (
    <StyledUserPet isRepresentative={isRepresentative}>
      <Link to="/profile/pet" className="link">
        <div className="container">
          <PetImage src={src} id={id} className={className} />
        </div>
        {children}
      </Link>
    </StyledUserPet>
  );
}

export default UserPet;

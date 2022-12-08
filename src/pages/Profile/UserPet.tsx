import { Children, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import PetImage from './PetImage';
import { StyledUserPet } from './User.style';

interface UserPetProp {
  children: ReactNode;
  src: string;
  id: string;
  className: string;
  isDelegate: boolean;
}

function UserPet({ src, id, className, isDelegate, children }: UserPetProp) {
  return (
    <StyledUserPet isDelegate={isDelegate}>
      <Link to="/pet" className="link">
        <div className="container">
          <PetImage src={src} id={id} className={className} />
        </div>
        {children}
      </Link>
    </StyledUserPet>
  );
}

export default UserPet;

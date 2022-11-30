import { Children, ReactNode } from 'react';
import PetImage from './PetImage';
import StyledUserPet from './UserPet.style';

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
      <div className="container">
        <PetImage src={src} id={id} className={className} />
      </div>
      {children}
    </StyledUserPet>
  );
}

export default UserPet;

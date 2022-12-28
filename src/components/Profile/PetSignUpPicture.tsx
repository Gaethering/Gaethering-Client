import { StyledPetPictureImage } from '../SignUp/PetPicture.style';

interface SignUpPictureType {
  defaultSrc: string;
  image: string;
}

function PetSignUpPicture({ defaultSrc, image }: SignUpPictureType) {
  return (
    <StyledPetPictureImage>
      {(
        <img
          src={image || defaultSrc}
          alt="반려동물 프로필"
          className="pet-picture"
        />
      ) || (
        <img src={defaultSrc} alt="반려동물 프로필" className="pet-picture" />
      )}
    </StyledPetPictureImage>
  );
}

export default PetSignUpPicture;

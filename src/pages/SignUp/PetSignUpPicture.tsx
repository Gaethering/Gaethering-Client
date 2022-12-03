interface SignUpPictureType {
  defaultSrc: string;
  image: string;
}

function PetSignUpPicture({ defaultSrc, image }: SignUpPictureType) {
  return (
    <img
      src={image ? image : defaultSrc}
      alt="반려동물 프로필"
      className="pet-picture"
    />
  );
}

export default PetSignUpPicture;

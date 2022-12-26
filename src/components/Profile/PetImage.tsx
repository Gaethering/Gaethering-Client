import StyledPetImage from './PetImage.style'

interface PetImageProp {
  src: string;
  name: string;
  className: string;
}

function PetImage({ src, petID, name, className }: PetImageProp) {
  return (
    <StyledPetImage>
      <img src={src} name={name} className={className}></img>
    </StyledPetImage>
  );
}

export default PetImage;
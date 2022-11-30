import StyledPetImage from './PetImage.style'

interface PetImageProp {
  src: string;
  id: string;
  className: string;
}

function PetImage({ src, id, className }: PetImageProp) {
  return (
    <StyledPetImage>
      <img src={src} id={id} className={className}></img>
    </StyledPetImage>
  );
}

export default PetImage;
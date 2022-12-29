import styled, { css } from 'styled-components';

interface PetImageProp {
  src?: string;
  name?: string;
  className?: string;
}

function PetImage({ src, name, className }: PetImageProp) {
  return (
    <StyledPetImage>
      <img src={src} name={name} className={className}></img>
    </StyledPetImage>
  );
}

export default PetImage;


const StyledPetImage = styled.div`
    position: relative;
    width: 10rem;
    height: 10rem;
    min-width: 3rem;
    min-height: 3rem;
    border-radius: 50%;
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }  
`;

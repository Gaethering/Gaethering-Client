import styled from 'styled-components';

const StyledPetPicture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .picture-area {
    position: relative;
  }
`;

const PictureButton = styled.div`
  border-radius: 100%;
  height: 25rem;
  padding: 0;

  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  }

  .camera-img {
    position: absolute;
    width: 7rem;
    right: 0.5rem;
    bottom: 1rem;

    border-radius: 100%;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  }
`;

const StyledPetPictureImage = styled.div`
  .pet-picture {
    width: 25rem;
    height: 25rem;
    border-radius: 100%;
  }
`;

export { PictureButton, StyledPetPicture, StyledPetPictureImage };

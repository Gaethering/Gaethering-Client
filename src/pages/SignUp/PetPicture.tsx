import { ChangeEventHandler, useState } from 'react';
import styled from 'styled-components';

const CameraImg = () => (
  <img
    src="/src/assets/camera.svg"
    alt="프로필 사진 등록"
    className="camera-img"
  />
);

function PetPicture() {
  const [image, setImage] = useState('');

  const handleFile: ChangeEventHandler<HTMLInputElement> = ({
    currentTarget: target,
  }) => {
    if (!target.files) {
      return;
    }
    const reader = new FileReader();

    reader.onload = (e) => {
      console.log('load success');
      setImage(e.target?.result as string);
    };

    reader.readAsDataURL(target.files[0]);
  };

  // 프로필 이미지
  const PetPicture = () => (
    <img
      src={image ? image : '/src/assets/defaultProfilePicture.svg'}
      alt="반려동물 프로필"
      className="pet-picture"
    />
  );

  return (
    <StyledPetPicture>
      <label className="picture-area">
        <input
          type={'file'}
          className="file-input hidden"
          accept="image/jpeg, image/jpg, image/png"
          onChange={handleFile}
        />
        <PictureButton>
          <PetPicture />
          <CameraImg />
        </PictureButton>
      </label>
    </StyledPetPicture>
  );
}

export default PetPicture;

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

  .pet-picture {
    width: 25rem;
    border-radius: 100%;
  }

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

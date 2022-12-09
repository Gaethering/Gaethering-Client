import { ChangeEventHandler, useState } from 'react';
import PetSignUpPicture from './PetSignUpPicture';

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
          <PetSignUpPicture
            defaultSrc="/src/assets/defaultProfilePicture.svg"
            image={image}
          />
          <CameraImg />
        </PictureButton>
      </label>
    </StyledPetPicture>
  );
}

export default PetPicture;

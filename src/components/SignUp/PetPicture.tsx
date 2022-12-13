import { ChangeEventHandler, useState } from 'react';
import { PictureButton, StyledPetPicture } from './PetPicture.style';
import PetSignUpPicture from './PetSignUpPicture';
import camera from '../../assets/camera.svg';
import defaultProfilePicture from '../../assets/defaultProfilePicture.svg';

const CameraImg = () => (
  <img src={camera} alt="프로필 사진 등록" className="camera-img" />
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
          <PetSignUpPicture defaultSrc={defaultProfilePicture} image={image} />
          <CameraImg />
        </PictureButton>
      </label>
    </StyledPetPicture>
  );
}

export default PetPicture;

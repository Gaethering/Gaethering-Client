import { ChangeEventHandler, Dispatch, useState } from 'react';
import { PictureButton, StyledPetPicture } from './PetPicture.style';
import PetSignUpPicture from './PetSignUpPicture';
import camera from '../../assets/camera.svg';
import defaultProfilePicture from '../../assets/defaultProfilePicture.svg';
import { useSetPetPicture } from '../../pages/SignUp';

const CameraImg = () => (
  <img src={camera} alt="프로필 사진 등록" className="camera-img" />
);

function PetPicture({ setHasPicture }: { setHasPicture: Dispatch<boolean> }) {
  const [image, setImage] = useState('');

  const setPetPicture = useSetPetPicture();

  const handleFile: ChangeEventHandler<HTMLInputElement> = ({
    currentTarget: target,
  }) => {
    if (!target.files) {
      return;
    }
    const reader = new FileReader();
    setPetPicture(target.files[0]);

    reader.readAsDataURL(target.files[0]);

    reader.onload = (e) => {
      console.log('load success');
      setImage(e.target?.result as string);
      setHasPicture(true);
    };
  };

  return (
    <StyledPetPicture>
      <label className="picture-area">
        <PictureButton>
          <PetSignUpPicture defaultSrc={defaultProfilePicture} image={image} />
          <CameraImg />
        </PictureButton>
        <input
          type={'file'}
          className="file-input hidden"
          required={true}
          accept="image/jpeg, image/jpg, image/png"
          onChange={handleFile}
        />
      </label>
    </StyledPetPicture>
  );
}

export default PetPicture;

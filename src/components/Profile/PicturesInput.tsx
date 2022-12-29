import { ChangeEventHandler, useState } from 'react';
import styled from 'styled-components';
import camera from '../../assets/camera.svg';
import defaultProfilePicture from '../../assets/defaultProfilePicture.svg';

interface Props {
  setImages: React.Dispatch<React.SetStateAction<File | undefined>>;
  disabled: boolean;
}

const CameraImg = () => (
  <img src={camera} alt="프로필 사진 등록" className="camera-img" />
);

function PicturesInput({ setImages, disabled }: Props) {
  const [showImg, setShowImg] = useState(defaultProfilePicture);

  const handleFile: ChangeEventHandler<HTMLInputElement> = ({
    currentTarget: target,
  }) => {
    if (!target.files) {
      return;
    }
    const file = target.files[0];
    setImages(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e) => {
      console.log('load success');
      const img = e.target?.result as string;
      setShowImg(img);
    };
  };


  return (
    <>
      <StyledPicturesInput>
        <label>
          <PictureButtonDiv>+</PictureButtonDiv>
          <div className="image-container">
            <img src={showImg} alt="사진" />
          </div>
          <input
            type={'file'}
            className="hidden"
            accept="image/jpeg, image/jpg, image/png"
            onChange={handleFile}
            disabled={disabled}
          />
        </label>
      </StyledPicturesInput>
    </>
  );
}

export default PicturesInput;

const StyledPicturesInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  margin: 1rem 1.2rem;
  padding: 2rem 0.8rem;

  .image-container {
    position: relative;
    img {
      width: 15rem;
      height: 15rem;

      margin-right: 2rem;

      border-radius: 1.6rem;
      box-shadow: 0 0 1.4rem 0 rgba(100, 100, 100, 0.2);
    }
  }
`;

const PictureButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme: { color } }) => color.white};
  width: 4rem;
  height: 4rem;

  position: relative;
  bottom: -15rem;
  left: 11rem;
  z-index: 1;


  cursor: pointer;

  border-radius: 1.6rem;
  background-color: ${({ theme: { color } }) => color.gray2};
  font-size: 5rem;
  font-weight: 100;
`;

import { ChangeEventHandler, useState } from 'react';
import styled from 'styled-components';
import Button from '../Form/Button';
import StyledButton from '../Form/Button.style';

interface Props {
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
  disabled: boolean;
}

function PicturesInput({ images, setImages, disabled }: Props) {
  const [showImg, setShowImg] = useState([] as string[]);

  const handleFile: ChangeEventHandler<HTMLInputElement> = ({
    currentTarget: target,
  }) => {
    if (!target.files) {
      return;
    }
    const file = target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e) => {
      console.log('load success');
      const img = e.target?.result as string;
      setShowImg((prev) => [...prev, img]);
      setImages((prev) => [...prev, file]);
    };
  };

  const delImage = (id: number) => {
    const isConfirm = confirm('사진을 삭제하시겠습니까?');
    if (!isConfirm) {
      return;
    }

    setShowImg((prev) => {
      const arr = [...prev];
      arr.splice(id, 1);
      return [...arr];
    });
    setImages((prev) => {
      const arr = [...prev];
      arr.splice(id, 1);
      return [...arr];
    });
  };

  return (
    <>
      <StyledPicturesInput>
        {showImg.map((elem, i) => (
          <div className="image-container" key={`img-${i}`}>
            <img src={elem} alt={`사진-${i}`} />
            <button
              type="button"
              onClick={() => delImage(i)}
              className="del-btn"
            >
              +
            </button>
          </div>
        ))}
        <label>
          {disabled ||
            (showImg.length < 3 && <PictureButtonDiv>+</PictureButtonDiv>)}
          <input
            type={'file'}
            className="hidden"
            accept="image/jpeg, image/jpg, image/png"
            onChange={handleFile}
            disabled={disabled}
          />
        </label>
      </StyledPicturesInput>
      {showImg.length >= 3 && <Alert>사진은 최대 3장 업로드 가능합니다</Alert>}
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

  overflow-x: scroll;

  .image-container {
    position: relative;
    img {
      width: 20rem;
      height: 20rem;

      margin-right: 2rem;

      border-radius: 1.6rem;
      box-shadow: 0 0 1.4rem 0 rgba(100, 100, 100, 0.2);
    }
    .del-btn {
      position: absolute;
      top: -0.9rem;
      right: 1.1rem;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${({ theme: { color } }) => color.white};
      background-color: ${({ theme: { color } }) => color.gray1};
      box-shadow: 0 0 1.4rem 0 rgba(255, 255, 255, 0.4);
      border-radius: 100%;

      font-size: 3rem;
      font-weight: 300;
      width: 3rem;
      height: 3rem;

      rotate: 45deg;

      cursor: pointer;

      &:hover {
        scale: 102%;
      }
    }
  }
`;

const PictureButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme: { color } }) => color.white};
  width: 16rem;
  height: 16rem;

  cursor: pointer;

  border-radius: 1.6rem;
  background-color: ${({ theme: { color } }) => color.gray3};
  font-size: 10rem;
  font-weight: 100;
`;

const Alert = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;

  font-size: 1.6rem;
  font-weight: 600;
`;

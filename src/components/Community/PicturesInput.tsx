import { ChangeEventHandler, useState } from 'react';
import styled from 'styled-components';
import Button from '../Form/Button';
import StyledButton from '../Form/Button.style';

interface Props {
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
}

function PicturesInput({ images, setImages }: Props) {
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
      setImages(file);
    };
  };

  return (
    <StyledPicturesInput>
      <div className="show-images">
        {showImg.map((elem, i) => (
          <img src={elem} alt={`사진-${i}`} key={`img-${i}`} />
        ))}
      </div>
      <label>
        <PictureButtonDiv>+</PictureButtonDiv>
        <input
          type={'file'}
          className="hidden"
          accept="image/jpeg, image/jpg, image/png"
          onChange={handleFile}
        />
      </label>
    </StyledPicturesInput>
  );
}

export default PicturesInput;

const StyledPicturesInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  margin: 1rem 2rem;
  padding: 2rem 0;

  overflow-x: scroll;

  .show-images {
    display: flex;
    align-items: center;
    justify-content: start;

    img {
      width: 20rem;
      height: 20rem;

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
  width: 16rem;
  height: 16rem;

  cursor: pointer;

  border-radius: 1.6rem;
  background-color: ${({ theme: { color } }) => color.gray3};
  font-size: 10rem;
  font-weight: 100;
`;

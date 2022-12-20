import { useState } from 'react';
import Button from '../../components/Form/Button';
import PetSignUpPicture from '../../components/SignUp/PetSignUpPicture';
import StyledEnd from './SignUpEnd.style';
import defaultProfilePicture from '../../assets/defaultProfilePicture.svg';
import { useWelcome } from '../SignUp';
import { useNavigate } from 'react-router-dom';

function SignUpEnd() {
  const { petName, imageUrl } = useWelcome();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div>
      <StyledEnd as="div">
        <h1>가입 완료!</h1>
        <PetSignUpPicture defaultSrc={defaultProfilePicture} image={imageUrl} />
        <p className="greeting">{petName}님 환영해요!</p>
        <Button
          type="button"
          btnTheme="main"
          className="submit-btn"
          onClick={handleClick}
        >
          주변 동물 친구 찾아보기!
        </Button>
      </StyledEnd>
    </div>
  );
}

export default SignUpEnd;

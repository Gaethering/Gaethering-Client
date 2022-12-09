import { useState } from 'react';
import Button from '../../components/Form/Button';
import PetSignUpPicture from './PetSignUpPicture';
import StyledEnd from './SignUpEnd.style';

function SignUpEnd() {
  const [petName, setPetName] = useState('뽀삐');

  return (
    <div>
      <StyledEnd as="div">
        <h1>가입 완료!</h1>
        <PetSignUpPicture
          defaultSrc="/src/assets/defaultProfilePicture.svg"
          image=""
        />
        <p className="greeting">{petName}님 환영해요!</p>
        <Button type="button" btnTheme="main" className="submit-btn">
          주변 동물 친구 찾아보기!
        </Button>
      </StyledEnd>
    </div>
  );
}

export default SignUpEnd;

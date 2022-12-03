import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import LogoWithTitle from '../../assets/LogoWithTitle';
import Input from '../../components/Form/Input';
import LogInForm from './LogInForm';

function Root() {
  //! mock API
  const [user, setUser] = useState(false);

  return (
    <StyledRoot>
      {user ? <Outlet /> : <LogInForm />}
      <button
        className="mock-login"
        type="button"
        onClick={() => setUser(!user)}
      >
        {user ? 'Log Out' : 'Log In'}
      </button>
    </StyledRoot>
  );
}

export default Root;

const StyledRoot = styled.div`
  width: 80vw;
  min-width: 390px;
  margin: 0 auto;

  .mock-login {
    margin: 3rem;
    padding: 0.4rem 1.4rem;
    background-color: #000;
    color: #fff;
    font-weight: 700;
  }
`;

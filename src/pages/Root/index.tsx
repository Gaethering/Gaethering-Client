import axios from 'axios';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { postLogOut } from '../../api/authAPI';
import { AuthApiUrl } from '../../api/authAPI.type';
import LogoWithTitle from '../../assets/LogoWithTitle';
import Input from '../../components/Form/Input';
import LogInForm from './LogInForm';

function Root() {
  //! mock API
  const [auth, setAuth] = useState(false);

  const getAuth = () => {
    const user = !!sessionStorage.getItem('is-auth');
    console.log(user);
    setAuth(user);
  };

  useEffect(() => {
    getAuth();
  }, []);

  return (
    <StyledRoot>
      {auth ? <Outlet /> : <LogInForm getAuth={getAuth} />}
      <button
        className="mock-logout"
        type="button"
        onClick={async () => {
          await postLogOut();
          getAuth();
        }}
      >
        {auth ? 'Log Out' : ''}
      </button>
    </StyledRoot>
  );
}

export default Root;

const StyledRoot = styled.div`
  width: 80vw;
  min-width: 390px;
  margin: 0 auto;

  .mock-logout {
    margin: 3rem;
    padding: 0.4rem 1.4rem;
    background-color: #000;
    color: #fff;
    font-weight: 700;
  }
`;

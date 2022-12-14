import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { postLogOut } from '../api/authAPI';
import { axiosDefaultsConfig } from '../api/axiosConfig';
import { getRequest } from '../api/requests';
import NavBar from '../components/NavBar';
import LogInForm from '../components/Root/LogInForm';
import { API_MEMBERS } from '../data/API_ENV';
import StyledRoot from './Root.style';

function Root() {
  const getUser = async () => {
    const res = await getRequest('/api/mypage');
    console.log('getUser!', res);
    return res;
  };

  //! mock API
  const [auth, setAuth] = useState(false);

  const getAuth = () => {
    const user = !!sessionStorage.getItem('is-auth');
    console.log('session Storage: is-auth?', user);
    setAuth(user);
  };

  const MockLogout = () => (
    <button
      className="mock-logout"
      type="button"
      onClick={async () => {
        await postLogOut();
        getAuth();
      }}
    >
      Log out
    </button>
  );

  useEffect(() => {
    axiosDefaultsConfig();
    getAuth();
    getUser();
  }, []);

  return (
    <StyledRoot>
      {auth ? (
        <>
          <NavBar />
          <Outlet />
          <MockLogout />
        </>
      ) : (
        <LogInForm getAuth={getAuth} />
      )}
    </StyledRoot>
  );
}

export default Root;

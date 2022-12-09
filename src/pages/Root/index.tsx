import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { postLogOut } from '../../api/authAPI';
import NavBar from '../../components/NavBar';
import LogInForm from './LogInForm';
import StyledRoot from './Root.style';

function Root() {
  //! mock API
  const [auth, setAuth] = useState(false);

  const getAuth = () => {
    const user = !!sessionStorage.getItem('is-auth');
    console.log(user);
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
    getAuth();
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

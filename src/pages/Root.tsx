import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { postLogOut } from '../api/authAPI';
import { setAxiosDefaultsBaseURL } from '../api/axiosConfig';
import { getRequest } from '../api/requests';
import NavBar from '../components/NavBar';
import LogInForm from '../components/Root/LogInForm';
import StyledRoot from './Root.style';
import { QueryKeys } from '../api/QueryKeys';

export type SetAuthType = React.Dispatch<React.SetStateAction<boolean>>;

function Root() {
  const [auth, setAuth] = useState(false);

  // //! mock API
  // const [auth, setAuth] = useState(false);

  // const getAuth = () => {
  //   const user = !!sessionStorage.getItem('is-auth');
  //   console.log('session Storage: is-auth?', user);
  //   setAuth(user);
  // };
  // const MockLogout = () => (
  //   <button
  //     className="mock-logout"
  //     type="button"
  //     onClick={async () => {
  //       await postLogOut();
  //       getAuth();
  //     }}
  //   >
  //     Log out
  //   </button>
  // );
  //// mock API

  useEffect(() => {
    setAxiosDefaultsBaseURL();
    // getAuth();
    // getUser();
  }, []);

  return (
    <StyledRoot>
      {auth ? (
        <>
          <NavBar />
          <Outlet />
          {/* <MockLogout /> */}
        </>
      ) : (
        // <LogInForm getAuth={getAuth} />
        <LogInForm setAuth={setAuth} />
      )}
    </StyledRoot>
  );
}

export default Root;

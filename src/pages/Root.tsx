import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { postLogOut, postReToken } from '../api/authAPI';
import { setAxiosDefaultsBaseURL } from '../api/axiosConfig';
import { getRequest } from '../api/requests';
import NavBar from '../components/NavBar';
import LogInForm from '../components/Root/LogInForm';
import StyledRoot from './Root.style';
import { QueryKeys } from '../api/QueryKeys';

export type SetAuthType = React.Dispatch<React.SetStateAction<boolean>>;

function Root() {
  const [auth, setAuth] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    setAxiosDefaultsBaseURL();
    postReToken()
      .then((res) => setAuth(res))
      .then(() => setInit(true));
  }, []);

  if (!init) {
    return <></>;
  }

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

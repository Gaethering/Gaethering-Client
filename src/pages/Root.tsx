import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Outlet, useOutletContext, useNavigate } from 'react-router-dom';
import { postReToken } from '../api/authAPI';
import { setAxiosDefaultsBaseURL } from '../api/axiosConfig';
import NavBar from '../components/NavBar';
import { ServiceType } from '../components/NavBar/NavBar.type';
import LogInForm from '../components/Root/LogInForm';
import StyledRoot from './Root.style';

export type SetAuthType = Dispatch<React.SetStateAction<boolean>>;

function Root() {
  const [auth, setAuth] = useState(false);
  const [init, setInit] = useState(false);

  const [serviceName, setServiceName] = useState<ServiceType>('개모임');

  const navigate = useNavigate();

  useEffect(() => {
    setAxiosDefaultsBaseURL();
    postReToken()
      .then((res) => setAuth(res))
      .then(() => setInit(true));
  }, []);

  useEffect(() => {
    if (auth && init) {
      navigate('/chat');
    } else if (!auth) {
      navigate('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth, init]);

  if (!init) {
    return <></>;
  }

  return (
    <StyledRoot>
      {auth ? (
        <>
          <NavBar serviceName={serviceName} setServiceName={setServiceName} />
          <Outlet context={setServiceName} />
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

export function useSetServiceName() {
  return useOutletContext<Dispatch<SetStateAction<ServiceType>>>();
}
